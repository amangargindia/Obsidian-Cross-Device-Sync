---
title: How to Design Accessible Dark Mode Interfaces
source: https://medium.com/@tundehercules/designing-effective-dark-mode-interfaces-17f38ecea2e9
author:
  - "[[Joseph Odeyemi]]"
published: 2023-03-06
created: 2026-05-25
description: Key Design Elements and Best Practices
tags:
  - clippings
---
## Key Design Elements and Best Practices

![A screenshot of components for a darkmode UI kit](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*SDF5ryM6GChP4Oww-UpMnA.png)

A screenshot of components for a darkmode UI kit

Being a millennial, I have witnessed the evolution of dark theme designs since the days of those clunky monitors running MS-DOS. The current wave of dark mode design owes much of its popularity to Apple, who introduced dark mode on macOS Mojave in 2018. Following in their footsteps, industry giant Google also adopted dark themes in their interfaces the following year. As dark mode grows in popularity, it’s crucial for interface designers to create visually appealing and accessible dark interfaces for all users.

However, designing effective dark mode interfaces can be a challenge as designers must consider the unique design elements and accessibility requirements of this style.

This article explores the fundamentals of designing accessible dark mode with a focus on product-facing interfaces.

I will discuss essential interface elements and provide best practices based on Material Design and WCAG standards by drawing from my learnings as a junior designer. Whether you’re just starting out or looking to up your dark mode game, this article has got you covered!

To benefit from the tips shared in this article, it is essential to have a basic understanding of colour accessibility and WCAG standards, as well as the HSL/HSB colour system. If these concepts are unfamiliar to you, there is no need to fret. The following resources will provide you with a basic understanding and there are many online resources available to assist you in expanding your knowledge.

***Links to learning resources***

[HSB/HSL colour system](https://www.learnui.design/blog/the-hsb-colour-system-practicioners-primer.html)

[Colour Accessibility](https://uxplanet.org/heres-what-you-need-to-know-about-colour-accessibility-in-product-design-aecbd0c30628)

## Colours

I believe colour is the most challenging aspect of UI design. Nevertheless, by following best practices for colour accessibility, I am able to effectively manage this challenge. This approach aligns with the principles of Material Design, which serve as a solid foundation for my work. Additionally, understanding the HSL/HSB colour system is also an important component in mastering the use of colour in UI design.

Meeting accessibility standards requires using an appropriate level of contrast. A contrast ratio of at least 4.5:1 between text and background colours is generally recommended.

In this article, I will discuss the use of colours in dark mode design in two parts.

### Accents

Material Design emphasises the use of desaturated colours over saturated colours in dark mode designs. The desaturated colours, also known as pastels, are preferred in dark mode designs due to their ability to provide sufficient contrast and minimize visual vibrations that may cause eye strain. Despite this recommendation, some designers may overlook this rule, thereby resulting in designs that sacrifice usability for aesthetics.

![A shot showing the tonal palette for a ui design and the application of the primary base across light and dark themes](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ahtpt6QPe2Qar3b2Al8o3w.png)

A shot showing the tonal palette for a ui design and the application of the primary base across light and dark themes

As a User Interface designer, I always strive to adhere to best practices and minimum WCAG standards in my work. Recently, while working on a client project that required both light and dark themes. I used the P500 variant of the primary colour palette for the primary buttons in the light theme and wanted to keep the same for the dark theme. On checking the contrast ratio between the button fill and text colour using the Stark plugin, I realised that the contrast was too low. To ensure accessibility, I switched to the lighter variant P300. Please note, it is important to prioritize these principles over aesthetics in design to create user-friendly interfaces.

![A shot showing the correct application of desatuarted color as accent on darkmode along with WCAG contrast value showing sufficient contrast against the dark background.](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Cl_i5DJKYfCsupk4ElaKWA.png)

A shot showing the correct application of desatuarted color as accent on darkmode along with WCAG contrast value showing sufficient contrast against the dark background.

A simpler fix to the low contrast with the button colour will be to change the text colour to white so the CTA passes minimum colour accessibility standards. However, it’s important to consider the concept of visual vibrations caused by using saturated colours on dark interfaces. This issue can often go unnoticed while on your design software, but becomes amplified on an actual device’s display. Visual vibrations occur when high-contrast colours are used together, causing an unpleasant and jarring visual effect.

![A shot discouraging of saturated colors due to visual vibrations](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AuCBAljZKojIm3I2VrdyoA.png)

A shot discouraging of saturated colors due to visual vibrations

***Create pastel?*** *To achieve desaturated colours, you can add white light to your base colour while decreasing its saturation value and increasing its lightness value.*

### Background & Surfaces

Most beginners often make the mistake of assuming that creating a dark theme is as simple as using black as the background colour. However, in dark theme design, the background colour typically uses a shade of black or dark grey. Material Design, recommends the use of dark grey **#121212** for dark themes.

One of the primary arguments against using actual black **#00000** in UI design is its high contrast, which can create an intense and overwhelming visual experience for users. This issue is particularly significant in dark mode interfaces where the black background dominates the entire screen. The excessive contrast can cause eye strain and reduce legibility, detracting from the overall user experience. Therefore, it is recommended to use softer shades of black or dark grey, which provide a more balanced and comfortable contrast for users. By carefully selecting the right shades, designers can create visually appealing and accessible UI designs that enhance the user experience.

It’s important to consider the background colour in relation to the surface colours. As these surfaces define the boundaries of different elements within the interface and provide a visual hierarchy. In dark theme design, these surfaces can be darker or lighter than the background, but they should still maintain a consistent colour palette that is in line with the overall theme.

![A shot showing couple of pure and tinted geys filled rectangular blocks along with their HSL color values](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*aK6L8jGDsuB1TobRDu_sng.png)

A shot showing couple of pure and tinted geys filled rectangular blocks along with their HSL color values

### Tinted or neutral grey?

Most times, designers use shades of grey between pure black and white. However, pure grey lacks hue and saturation, which can result in a dull and lifeless appearance. To avoid this, designers can control the look and feel of their greys by adjusting the hue and saturation values to achieve the desired outcome. I adopted a technique from [refactoring UI](https://www.refactoringui.com/) to create two sets of greys; ***pure greys*** and ***tinted greys***. Tinted greys are achieved by shifting the hue value from zero to a primary or preferred colour of choice. With this approach, designers can achieve a more nuanced and visually appealing tonal palette for their designs.

## Shadows,Elevation and Depth

In light-mode designs, shadows are commonly used to add depth and dimensionality to elements on a surface. However, in dark mode, traditional shadows can be ineffective and even visually jarring. This is because dark shadows can easily blend into the dark background, while white shadows can appear out of place. ==Instead of shadows, a better solution for showing elevation in dark mode is to use a lighter shade of the background colour.== This will create the desired sense of depth without compromising the overall design aesthetic.

![Shows four shot of four cards ,one in light theme and three in dark theme depicting how to express elevation](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_gOf6-ZGlDs71b_dDtp6HA.png)

Shows four shot of four cards,one in light theme and three in dark theme depicting how to express elevation

### Elevation

Material Design employs the use of a mixing semi-transparent white or coloured overlay with the background colour to create surface colours. This concept may be difficult to grasp, well it was for me.

## Get Joseph Odeyemi’s stories in your inbox

Join Medium for free to get updates from this writer.

In simpler terms, you can control elevation by creating contrast with the background colour. The surface colour’s lightness determines its elevation; the lighter the surface colour, the higher the elevation. This is because the surface is closer to the viewer, resulting in more light hitting it than the background, which is farther away.

![four rectangular blocks of tinted gray with decreasing lightness from top to bottom ,depicting concept of elevation with flat surfaces in darkmode](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*74qJOPsNfuoqtx_hXfxjjg.png)

four rectangular blocks of tinted gray with decreasing lightness from top to bottom,depicting concept of elevation with flat surfaces in darkmode

### Depth

One effective way to create depth is through the use of contrast, strategic placement of darker surfaces, and even the smallest hint of light can make a significant impact in a dark environment. The input field and tab bar below demonstrate the effective use of contrast to create an illusion of depth. The darker background combined with the lighter stroke conveys a sense of depth.

![a shot of ui elements tab bar, input field showing how to use light and dark shade of grey to depict depth](https://miro.medium.com/v2/resize:fit:1374/format:webp/1*nmL7PxAz0dYOyq-GiwfcZQ.png)

a shot of ui elements tab bar, input field showing how to use light and dark shade of grey to depict depth

***It’s worth noting that while shadows may not always work in dark mode, they can still have a place in certain design styles such as skeuomorphism. However, this article is focused on best practices inspired by material design, which tends to favor a flat UI design style.***

## Typography

Text readability is a critical aspect of user experience in dark mode design. To ensure good readability, it is essential to consider factors such as font size, weight, optimal line height, and letter spacing, which remain consistent across both light and dark themes. The only significant difference between the two themes is the text colour.

### Avoid pure white

When designing interfaces for dark mode, it’s important to consider the impact of text colour on readability and user comfort. The use of pure white text on a dark background can cause eye strain and fatigue due to the high contrast between the two. This can be particularly challenging for people with visual impairments or dyslexia. To ensure comfortable and legible text, it is advised to use light grey or semi transparent white(reduced level of opacity) for text instead of pure white. This softer contrast not only reduces eye strain but also maintains the legibility of the text.

![A shot of three cards on a dark background with text colored pure white ,semi transparent white and light gray respectively.](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wlWWyHgMdHDVI0OeTzDwqA.png)

A shot of three cards on a dark background with text colored pure white,semi transparent white and light gray respectively.

### Light grey vs Semi transparent White

Using semi-transparent white text, can adapt to both neutral and coloured backgrounds seamlessly, unlike light grey text which may look out of place on a coloured background. However, designers must strike a balance between legibility and aesthetics, as overly transparent text can be difficult to read. To help guide this decision, Material Design recommends specific opacity levels for different types of text, such as **86% for high-emphasis text** like headers, **60% for medium-emphasis text** like body and hint text, and **38% for disabled text**.

![A shot showing semi transparent white and light grey with the former recommended as it blends with the colored backgroud .](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KHrojFBVrKo0m2cVWKjwxQ.png)

A shot showing semi transparent white and light grey with the former recommended as it blends with the colored backgroud.

## Icons

I would give preference to filled icons over outlined icons as they provide better visibility in the dimly lit interface. However, if you prefer using outlined icons, it’s recommended to use a medium stroke weight to enhance legibility.

It’s crucial to choose an appropriate stroke weight to ensure legibility. Using a stroke that is too thin can cause the icon to blend into the dark background, making it difficult to see. Therefore, it’s recommended to use a medium stroke weight that is thick enough to be visible but not so thick that it begins to bleed and blur on display.

![A shot of outlined icons with varying stroke weight](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*SUY6wEBfj8ifQRKKsict2A.png)

A shot of outlined icons with varying stroke weight

## Images

![A shot of two card with images in both light and dark themes](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*FZFrX0MAe1kx54t-4fbO9w.png)

A shot of two card with images in both light and dark themes

Designing for dark mode requires special attention to images due to the dim lighting of the interface. Brightly coloured images can cause uncomfortable contrasts that affect the overall user experience. To address this reduce the image contrast, there are two hacks that designers can use:

- Manually adjust the contrast of the image in the design software.
![A shot of reduced contrast image on a darkmode card](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UXz60G85TV-lve66NXzCFA.png)

A shot of reduced contrast image on a darkmode card

- Use a transparent overlay as a brightness filter on the image, which can help reduce the contrast and create a more cohesive and comfortable look.
![dark mode card with an image using a dark overlay to reduce image brightness](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9T3RiKdNKg2GhPWsglqMuw.png)

dark mode card with an image using a dark overlay to reduce image brightness

To accommodate dynamic or user-uploaded images in dark mode interfaces communicate with the developer, adjustments can be made on the front end using *CSS brightness and contrast filters.* This allows for a more flexible approach by applying appropriate filters, images can be optimized for legibility and visual appeal in a dark mode interface. However, it’s important to test the images in different contexts and devices to ensure the filters are applied correctly and the images are accessible to all users.

### Summary

1. Use desaturated colours for accents; when designing for dark mode. Desaturated colors are better suited for accents as they create more contrast and visibility. However, use them sparingly and only where necessary to avoid cluttering the interface. For the background and surfaces, use dark greys to maintain consistency and avoid harsh contrast.
2. Avoid shadows; shadows are not recommended in dark mode design as they don’t work well in low light conditions. Instead, use contrast to create depth and adjust the brightness of dark surfaces to control elevation.
3. Pure whites for text and icons gives harsh contrast in dark mode stick to transparent whites or light greys, preference given the former.
4. Use medium stroke weights; use medium stroke weights to maintain visibility and avoid thin strokes which reduce legibility or thicker strokes that blur.
5. Optimize images for dark mode; Images can look out of place and ruin the aesthetic of dark mode. To avoid this, give them extra treatment to ensure their brightness levels stay low and consistent with the overall dark theme.

### Resources

## [Material Design](https://m2.material.io/design/color/dark-theme.html?source=post_page-----17f38ecea2e9---------------------------------------)

### Build beautiful, usable products faster. Material Design is an adaptable system-backed by open-source code-that helps…

m2.material.io

Thank you for reading. I hope the article has provided you with valuable insights and knowledge on designing usable and accessible dark mode interfaces.

If you find this article helpful, please share with your designer peers, [follow](https://medium.com/@tundehercules) and [subscrib](https://medium.com/subscribe/@tundehercules) e to receive email notifications for future posts.