---
layout: post
title: Backdoors might be good for AI safety*
date: 2024-05-25
categories: ai
---
Not literally. But maybe.

Guaranteeing safe AI is immensely difficult. Despite ongoing work, we lack a proper theoretical understanding of model internals to provide formal guarantees. Even guaranteeing we can *shut down* the model is tricky because the model could be instrumentally pursuing self-preservation and intentionally making it difficult for us to "just unplug it." [^1] GPT-4, Claude 3, and many current SOTA models can already produce superficial [*quines*](https://www.wikiwand.com/en/Quine_(computing)), or programs that output their own source code - and thus, in theory, can self replicate to some extent. 

The existence of adversarial attacks definitely has negative impacts rippling in misuse and security. However, they could also be used for guaranteeing a way to shut down the model and/or running live evaluations.[^2]

### Good backdoors?
First, let's formalize two forms of adversarial attacks: backdoors and input-perturbuation adversarial examples. Assume we are working with a model $f_\theta : \mathcal{X} \to \mathcal{Y}$ with parameters $\theta$ trained on a dataset $\mathcal{D} = \{(x_i, y_i)\}$. For ease of expression, assume $\mathcal{X}$ is a normed vector space.

**Backdoor**: Assume we have another arbitrary dataset $\mathcal{D}'$ (the dataset we'd like to backdoor the model on). We say a backdoor for $\mathcal{D}'$ on $f_\theta$ exists if there exists $\theta'$ such that $f_{\theta'}(x) = y$ for all $(x, y) \in \mathcal{D} \cup \mathcal{D}'$. 

Intuitively, a backdoor exists if there exists a set of new parameters so that the model predicts correctly on both the training data and the new dataset. In particular, we get to choose the labels in $\mathcal{D}'$, so we can make them as bad or as good as we want.

**$\varepsilon$-Adversarial Example:** Again, assume we have another arbitrary dataset $\mathcal{D}'$ (this time, the dataset of adversarial examples). We say an $\varepsilon$-adversarial perturbation for $\mathcal{D}'$ on $f_\theta$ exists if there exists a perturbation map $\delta : \mathcal{X} \to \mathcal{X}$ so that $f_\theta(x + \delta(x)) = y$ and $\| \delta(x) \| \leq \varepsilon$ for all $(x, y) \in \mathcal{D}'$. 

[This paper](https://arxiv.org/pdf/2007.05084) (which I shamelessly took these definitions from), Attack of the Tails, is really cool. The authors show that, in general, backdoors are NP-hard to detect and are almost never (in the measure theory sense) found by gradient-based methods because their eliciting inputs are concentrated in areas of exponentially low probability in the training distribution. It also shows that if a model is not robust against adversarial examples, it is also not robust against backdoors. 

This is problematic. Unfortunately, robustness against adversarial examples seems to be a hard problem, so robustness against backdoors is thus also hard. If an attacker has somehow backdoored a model, it would be also be *computationally* hard to detect the backdoor. The attacker could use this one part of the model that *they can control deterministically* to elicit harmful prompts, execute malicious code, or expose other security vulnerabilities. Tough.

A guarantee of deterministic control, huh? Sounds familiar...

<blockquote>
We could intentionally adversarially attack our own models with "emergency switches."
</blockquote>

For example, we can intentionally train a backdoor into the model that, on a certain set of preselected "trigger" tokens, *forces* the model to run code that terminates its execution. $\mathcal{D}'$ could be something like {("SolidGoldMagikarp", "`sys.exit(0)`")}. Alternatively, we could try to construct a $\delta$ so that on $\mathcal{D}'$, the model once again outputs the emergency shutdown code if we perturb the input $x$ by $\delta(x)$.

Notably, even if the model had white-box access to itself, we would have a theoretical guarantee that the model wouldn't be able to detect that it had been backdoored. This can be as simple as creating a proxy dataset $\mathcal{D}_p$ that has training performance correlated with test performance on $\mathcal{D} \cup \mathcal{D}'$ or more complicated to avoid simple heuristic defenses, such as norm based defenses.

There are a number of other ways backdoors could be useful for safety, with most deriving from forcing the model to execute a block of code. For example, if we had an evaluation that can detect when a model is lying, we can force the model to run this evaluation every time it generates an output by including the trigger tokens. This might come in the form of running a consistency check, a probe, or an automated interpretability pipeline. 


### Limitations
- The shutdown problem is (mostly) only difficult when the model begins instrumentally pursuing self-preservation. In this case, it's possible that the model has already duplicated itself and disseminated the copies across many computers. This approach falls short in this case - forcing all copies to execute this code would be as difficult as tracking down all copies of the model. Alternatively, the model could have split its own weights (not copies) across many machines and executes in a distributed manner. In this case, this approach fails even more spectacularly - it would only shut down at best one portion of the model, analogous to killing one head of the Hydra. Unfortunately, there's still the other heads.
- The backdoor is also sensitive to retraining. Although computationally hard to detect, backdoors are not computationally hard to remove. Resetting weights or retraining weights easily removes them, so if the model had acquired some desire to recursively self improve, the backdoor could be trained away. In this case, perhaps adversarial examples are more versatile, as finding adversarial examples seems easier than injecting a backdoor (since the latter generally requires influence over training), although the implication for existence goes the other way.
- We would also need to prevent the backdoor from being elicited in normal deployment. One approach to solve this limitation is by using "edge backdoors" as presented in Attack on the Tails - choose $\mathcal{D}'$ comprised of extremely low frequency data points. In the case of LLMs, that would be low frequency tokens that normally do not come up in normal English.


---

[^1]: I'm ignoring whether "shutting down" the AI (basically, killing it if it's conscious) is a morally good idea and just thinking about this from a technical standpoint. Though there's plenty of discussion to be had about AI ethics - another time maybe :) 

[^2]: Thanks to Andrew Garber for first introducing me to the shutdown variant of this idea over dinner at a recent AI safety workshop.

