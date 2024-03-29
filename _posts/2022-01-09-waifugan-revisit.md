---
layout: post
title: waifuGAN Revisit - Perfect Practice
date: 2022-01-09
categories: cs
---
<p>Happy New Year! To celebrate, I've decided to update this old project and give it a healthy conclusion so that I can go work on some other projects, though a revisit 2 is never out of the picture. </p>
<h2>Dataset</h2>
<p>The only changes I made here were adding additional scraped images from <a href = "https://www.e-shuushuu.net">shuushuu</a>. These were really high quality images, that I regret to admit I hand-sorted through to eliminate noise, which was a super tedious process. In the future, its definitely worth improving both the face cropper, maybe using an ensemble model with a custom Mask-RCNN model or something like that.</p>
<h2> Model </h2>
I tinkered with a lot of different tricks from the awesome <a href = "https://github.com/soumith/ganhacks"> ganhacks </a> repository/other sources, and came up with a couple helpful ones. 
<ul>
    <li> <b>LeakyReLU</b> instead of just ReLU </li>
    <li> <b>Smooth Labels</b> - instead of labeling images as 0 or 1 for real and fake images, choose from a uniform distribution (maybe test with other distributions) between [0.7, 1] for real images and [0, 0.3] for fake images. </li>
    <li> <b>Adjusting learning rates</b> - learning rates are super sensitive, so I fiddled around with these. It's really hard to test different values, since every time you do you have to rerun the model, which for me can take hours (usually ran it overnight since I had to use my computer during the day.) I wonder if there's a way to better tweak learning rates, because I found the values provided by the paper of 0.0002 to be too high and the discriminator would get too good too fast.  </li>
    <li> <b> Occasionally flipping the labels for D</b> - This was again a measure to prevent D from getting too good too fast. </li>
    <li><b>Dropout Layers</b> - No true confirmation that they made a significant impact, but they definitely didn't make it worse so I left them in. </li>
</ul>
<h2> Results/Discussion </h2>
<p> Check out the repo's <a href = "https://github.com/alanchen-1/waifuGAN"> README</a> for some example images. </p>
<p>My first initial observation is the significant difference in coloring: the images here seem to have more "pop" from the bolder colors. It seems the model was much less conservative in color choice, and it makes the generated images look much better. I think this has large part to do with the larger dataset and higher quality images from shuushuu. 
</p>
<p> Overall I was able to improve the final product, but only through little gains in different aspects like color, line definition, minimizing noise/messed up images, and training time. I still don't feel 100% satisfied with the results, so maybe waifuGAN revisit part 2 is coming in the future! </p>
<h2> Remarks </h2>
<p>I'm basically putting a sort of end to this project for now, but of course there's a lot to still be improved. I'll probably revisit someday, when I'm a bit more experienced. I do have some parting shots though, which is probably the main content of this post anyway. </p>
<p> The hardest part about this project was improving the initial model architecture. Testing tweaks was a pain, because I have to test tweaks individually, and also how they work in conjunction with each other. Every update requires rerunning the model, which means another 5-6 hours elapsed. I can imagine with an even bigger model how this might get out of hand fast.  </p>
<p> The core reason why this process was so time consuming and tedious for me was because <b> there was and is no good way to measure how good the images are other than just running the model again and looking at them. </b> I know such metrics exist, mainly by comparing the generated images to the original training images, but I feel like its incredibly hard to abstract and quantify art and images. Even futher, it still doesn't address having to rerun the model with different combinations of tweaks. Maybe I should've used some Latin squares... </p>
<p> To me, this observation raises the question: how can researchers be sure they have optimized their hyperparameters and model design? Or are we just settling for "good enough"? If so, is "good enough" really "good enough" when we are applying these models to diagnose diseases, predict economic curves, or maybe in the future perform surgeries? </p>
<p> I feel as if a lot of AI is mainly trial and error, creating a lot of inefficiencies like in the experimentation process of tuning hyperparameters. The problem is only exacerbated by the fact that universal values for hyperparameters rarely exist, as different datasets require different behaviors of the models (like here, where I found that D outpaced G with the learning rates specified by the original DCGAN paper). And as far as my limited knowledge of the field goes, there doesn't exist a good way to <b>optimize</b> the parameters (good meaning not only correct, but also efficient. Though, we don't even have correct yet I think, so one thing at a time). </p>
<p> I've gone off on quite a tangent, but it's interesting how we're still far from perfecting models that are crucial when the stakes get high. It reminds me of the saying that "practice doesn't make perfect; <b> perfect </b> practice makes perfect." If we want to make perfect models, we have to first perfect the training process. That might be an even more difficult problem... </p>
<p>	Okay, I'm done, haha. Happy New Year! - Alan</p>
---