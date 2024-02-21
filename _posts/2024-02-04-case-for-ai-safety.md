---
layout: post
title: The Case for AI Safety isn't AGI
date: 2024-02-04
categories: ai
---
*Thanks to James Zhou for the lengthy discussion that prompted this reflection.*

<blockquote>
AI safety work is about reducing existential risk from more than just AGI, but the public is not aware of this fact.
</blockquote>

Update (02/21/24): OpenAI recently found state-affiliated actors using GPT for malicious use cases. [Read here.](https://openai.com/blog/disrupting-malicious-uses-of-ai-by-state-affiliated-threat-actors)

I am writing this post as a newcomer to the AI safety field who until very recently was unconvinced on the impact of AI safety work. I found the problems and work technically interesting, but not necessarily impactful. I will talk about why I thought that, why I think my beliefs are not uncommon, and what changed my mind.

I hope that this post will provide some valuable perspective into how I think we can increase the number of people who think AI safety work is important.
### My original beliefs
My main misconception was that AI safety work is about reducing existential risk (x-risk) **from specifically AGI.** In reality, AI safety work will likely see its impacts manifest in creating safe transformative AI (TAI) in addition to safe AGI - I believe the mutual benefit is a more convincing case of the importance of AI safety.

I feel like the general public has (and me as a newcomer had) this misconception because AGI is not very well understood. The widespread perception of AGI is heavily influenced by science fiction media which presents AGI as some sort of mysterious, superintelligent, and *futuristic* system, leading to a social impression that "dealing with bad AGI" is not an urgent problem. Unfortunately, if the perception of AI safety research is that it is all about AGI, it will cause the dismissal of AI safety work through lenses like "AGI is improbable and far away" and "people are dying right now in X - why should I care about AGI?"

The one thing that *is* well understood about AGI is that people are fearful of it. I think there is an undoubted general consensus that AGI *would* in fact pose x-risk, but the perception of AGI as a "low probability" event and overall lack of expertise about AI offsets this consensus.

Even after diving deeper into AI safety literature and the community, I never thought twice about this misconception. I think my flawed but unconscious deduction process could roughly be outlined as:

1. I was reading a lot of current work in alignment that focuses on reducing the x-risk posed by AI systems which exhibit instrumentally convergent (IC) behaviors.
2. AGI likely exhibits IC behaviors.
3. Thus, a lot of the current work in alignment focuses on reducing the x-risk posed by AGI.

However, no literature that I read or the beginner resources that I used cleared up this misconception. For instance, AI Safety Fundamentals' alignment 101 course's first week is titled "Artificial General Intelligence," unintentionally continuing to reinforce the tight association between "AI safety" and "AGI." [^1]

![bluedot](/assets/case_for_ai/bluedot.png)

**Clearly, this misconception is damaging to the reputation and purpose of AI safety research as a whole and diminishes interest. But, also realize that it is completely rational impact calculus.**

Unfortunately, I believe that the social reputation of AGI is difficult to change *without actually achieving some semblance of AGI*, at which point it would be too late for big institutional investments into safety work. My impression is that people only started to take AI safety slightly more seriously once ChatGPT was publicly available and everyone and their mother was posting about how "the robots are going to take over" on social media... and then after actually using ChatGPT everyone realized that it kind of sucks and reset their priors to "AI isn't that scary" and "you think AI will take my job? lol".
### What updated my beliefs?
I recently had a conversation with a friend and he introduced me to the concept of TAI, or intelligent AI that will be influential in localized sectors of society while not necessarily having achieved general intelligence nor exhibiting IC behaviors.

He gave the thought experiment of a bad actor that, even if not given the resources to train a model from scratch (a governance problem), could jailbreak a particularly capable public LLM to help them develop bioweapons. Notably, AGI does not need to even remotely exist for this to happen.

This was the turning point for me to realize the benefit of AI safety work, because in my mind safe TAI is a much more tangible impact. It feels significantly less far off that an improved version of GPT would be able to assist in the development of weapons that indirectly raise the probability of catastrophic events and/or human extinction. The negative impacts of misaligned TAI can come from something I *know* exists: bad people. This can be contrasted with the x-risk from AGI, which I know almost surely exists but with a foggy timeline.

| Category | AGI | TAI | 
| ----- | --- | --- |
| x-risk? | Yes | Maybe-Probably |
| Timeline? | "idk"-"Far" | Imminent | 
| Do I care? | "A little"-"A lot" | Yes |


While doing all of my introductory reading, I never thought twice to realize that safety research more broadly targets the aligned development of TAI, because it is so implicitly loaded as a premise in online forums, literature, and educational curriculums. It seems obvious now, but implicitly I had consistently been associating AGI with safety efforts and I don't think I'm the only one.

This distinction between "TAI and AGI" and "just AGI" completely shifts the dynamic of the impact calculations. With "just AGI," AI safety's impact is heavily variant on the timeline of AGI. If I don't think AGI is going to appear anytime soon, I will naturally believe that AI safety work is not important. However, thinking of AI safety work as impacting "TAI and AGI" reduces this variability because TAI seems so much more plausible. As my friend put it,
<blockquote>
"Even if the impact is not x-risk, we can be sure that there exist bad actors who would jump on the chance to use deployed TAI for bad purposes."
</blockquote>

### What would shift the public?
As aforementioned, I am sure I am not the only one with this misconception. But, I am concerned that not everyone will have access to a great peer that will explain to them the difference. I'm not sure how to publicly address this misrepresentation of the scope of AI safety work, especially given the "clickbait" appeal of AGI that can increase interest in AI safety.

However, I've concluded that because the stigma around AGI will be hard to change, a core component to any public-facing advocacy agenda must be to stress the distinction between TAI and AGI and market AI safety research as work that will manifest its impacts on TAI as well. Otherwise, the impact will continue to be perceived as wishy-washy and immaterial.

---
[^1]: To be clear, I have nothing against AISF. I think BlueDot is doing really important work and their introductory collections of materials have been a (and I cannot stress this enough) *blessing* for a lost and overwhelmed beginner.


