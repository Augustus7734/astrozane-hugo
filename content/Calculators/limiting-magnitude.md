---
title: "Telescope Limiting Magnitude Calculator"
description: "Estimate the faintest star or deep-sky surface brightness you can see through a telescope, from aperture, magnification, sky brightness, atmosphere and observer experience."
date: 2026-11-22
weight: 2
---

How faint can you go? This estimates the faintest star you can see through a given telescope, or the faintest surface brightness for a deep-sky object, under your sky.

{{< limiting-mag >}}

## What it takes into account

- **Sky brightness.** Enter a Bortle class or an SQM reading; changing one updates the other. SQM tops out at 22.2.
- **Atmosphere.** Site elevation, humidity, dust and aerosols, and how high the object is in the sky.
- **Telescope.** Aperture and type. Refractors have no central obstruction, Newtonians are taken as 25% obstructed and catadioptrics as 33%.
- **Magnification.** More power darkens the sky background and helps, up to the point where seeing smears the star and the limit drops again.
- **Binoscopes and binoviewers.** A binoscope is about 1.4 times brighter than one eye. A binoviewer is about 20% dimmer.
- **Experience.** Beginner, intermediate, advanced or expert.

## How it is calibrated

The expert setting is matched to what I actually see with my [14.7" f/2.9 Dob](/projects/147-inch-f29/) under very dark skies at close to 7000 feet, which is about magnitude 17.3 to 17.5. Everything else is scaled from there. Treat the result as an estimate. Your eyes, your optics and the night will all move it around.

For true field and magnification with a given eyepiece, use the [FOV and magnification calculator](/calculators/FOV/).
