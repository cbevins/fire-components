/**
 * USDA Forest Service Gen. Tech. Rep. RMRS-GTR-153. 2005
 */
export const FuelWalk = {
  ask: 'The general fire-carrying fuel type is',
  choices: [
    // Grass series
    { if: 'nearly pure grass and/or forb type (Grass)',
      ask: 'the climate is',
      choices: [
        { if: 'arid to semiarid (rainfall deficient in summer); extinction moisture content is 15%.',
          ask: 'the fuel bed is',
          choices: [
            { if: 'short, patchy grass, and possibly heavily grazed.',
              ask: null, fuel: 'gr1', ros: 'moderate', flame: 'low'},
            { if: 'moderately coarse and continuous grass',
              ask: 'the average grass depth is about',
              choices: [
                { if: '1 foot', ask: null, fuel: 'gr2', ros: 'high', flame: 'moderate'},
                { if: '2 feet', ask: null, fuel: 'gr4', ros: 'very high', flame: 'high'},
                { if: '3 feet', ask: null, fuel: 'gr7', ros: 'very high', flame: 'very high'},
              ]
            }
          ]
        },
        { if: 'subhumid to humid (rainfall adequate in all seasons); extinction moisture content is 30 - 40%.',
          ask: 'the fuel bed is',
          choices: [
            { if: 'short, patchy grass; possibly heavily grazed',
              ask: null, fuel: 'gr1', ros: 'moderate', flame:'low'},
            { if: 'very coarse grass, about 2 feet tall',
              ask: null, fuel: 'gr3', ros: 'high', flame:'moderate'},
            { if: 'dense, coarse grass, about 1 to 2 feet tall',
              ask: null, fuel: 'gr5', ros: 'very high', flame: 'high'},
            { if: 'dryland grass, about 1 to 2 feet tall',
              ask: null, fuel: 'gr6', ros: 'very high', flame:'very high'},
            { if: 'heavy, coarse, continuous grass, about 3 to 5 feet tall',
              ask: null, fuel: 'gr8', ros: 'very high', flame:'very high'},
            { if: 'very heavy, coarse, continuous grass, about 5 to 8 feet tall',
              ask: null, fuel: 'gr9', ros: 'extreme', flame: 'extreme'},
          ]
        }
      ]
    },
    // Grass-Shrub series
    { if: 'mixture of grass and shrub, up to about 50 percent shrub coverage (Grass-Shrub)',
      ask: 'the climate is',
      choices: [
        { if: 'arid to semiarid (rainfall deficient in summer); extinction moisture content is 15%.',
          ask: 'the fuel bed is',
          choices: [
            { if: 'about 1 foot high with low grass load',
              ask: null, fuel: 'gs1', ros: 'moderate', flame: 'low'},
            { if: 'about 1 to 3 feet high',
              ask: null, fuel: 'gs2', ros: 'high', flame: 'moderate'},
          ],
        },
        { if: 'subhumid to humid (rainfall adequate in all seasons); extinction moisture content is 30 - 40%.',
          ask: 'the fuel bed is',
          choices: [
            { if: 'moderate load, less than 2 feet deep',
              ask: null, fuel: 'gs3', ros: 'high', flame: 'moderate'},
            { if: 'heavy load, more than 2 feet deep',
              ask: null, fuel: 'gs4', ros: 'high', flame: 'very high'},
          ],
        }
      ],
    },
    // Shrub series
    { if: 'shrubs covering at least 50 percent of the site; grass sparse to nonexistent (Shrub)',
      ask: 'the climate is',
      choices: [
        { if: 'arid to semiarid (rainfall deficient in summer); extinction moisture content is 15%.',
          ask: 'the fuel bed is',
          choices: [
            { if: 'low load, about 1 foot deep; some grass may be present',
              ask: null, fuel: 'sh1', ros: 'very low', flame: 'very low'},
            { if: 'moderate load, about 1 foot deep, no grass fuel present',
              ask: null, fuel: 'sh2', ros: 'low', flame: 'low'},
            { if: 'heavy load, about 4 to 6 feet deep',
              ask: null, fuel: 'sh5', ros: 'very high', flame: 'very high'},
            { if: 'very heavy load, about 4 to 6 feet deep',
              ask: null, fuel: 'sh7', ros: 'high', flame: 'very high',
              note: 'spread rate lower than SH5, but flame length similar'},
          ]
        },
        { if: 'subhumid to humid (rainfall adequate in all seasons); extinction moisture content is 30 - 40%.',
          ask: 'the fuel bed is',
          choices: [
            { if: 'moderate shrub load, possibly with pine overstory or herbaceous fuel, depth about 2 to 3 feet',
              ask: null, fuel: 'sh3', ros: 'low', flame: 'low'},
            { if: 'low to moderate shrub and litter load, possibly with pine overstory, depth about 3 feet',
              ask: null, fuel: 'sh4', ros: 'high', flame: 'moderate'},
            { if: 'dense shrubs, little or no herb fuel, depth about 2 feet',
              ask: null, fuel: 'sh6', ros: 'high', flame: 'high'},
            { if: 'dense shrubs, little or no herb fuel, depth about 3 feet',
              ask: null, fuel: 'sh8', ros: 'high', flame: 'high'},
            { if: 'dense, finely branched shrubs with significant fine dead fuel, depth about 4 to 6 feet; some herbaceous fuel may be present',
              ask: null, fuel: 'sh9', ros: 'high', flame: 'very high'},
          ]
        },
      ]
    },
    // Timber-Understory series
    { if: 'grass or shrubs mixed with litter from forest canopy (Timber-Understory)',
      ask: 'the climate is',
      choices: [
        { if: 'semiarid to subhumid climate; extinction moisture content is 20 percent.',
          ask: 'the fuel bed is',
          choices: [
            { if: 'low load of grass and/or shrub with litter',
              ask: null, fuel: 'tu1', ros: 'low', flame: 'low'},
            { if: 'short conifer trees with grass or moss understory',
              ask: null, fuel: 'tu4', ros: 'moderate', flame: 'moderate'},
            { if: 'high load conifer litter with shrub understory',
              ask: null, fuel: 'tu5', ros: 'moderate', flame: 'moderate'},
          ],
        },
        { if: 'humid climate; extinction moisture content is 30 percent.',
          ask: 'the fuel bed is',
          choices: [
            { if: 'moderate litter load with shrub component',
              ask: null, fuel: 'tu2', ros: 'moderate', flame: 'low'},
            { if: 'moderate litter load with grass and shrub components',
              ask: null, fuel: 'tu3', ros: 'high', flame: 'moderate'},
          ]
        }
      ]
    },
    // Timber-Litter series
    { if: 'dead and down woody fuel (litter) beneath a forest canopy (Timber Litter)',
      ask: 'is the fuel bed recently burned',
      choices: [
        { if: 'fuel bed IS recently burned but able to carry wildland fire',
          ask: null, fuel: 'tl1', ros: 'very low', flame: 'very low',
          note: 'light to moderate load, fuels 1 to 2 inches deep'},
        { if: 'fuel bed NOT recently burned.',
          ask: 'the fuel bed is composed primarily of',
          choices: [
            { if: 'broadleaf (hardwood) litter',
              ask: 'the fuel bed is',
              choices: [
                { if: 'low load and compact',
                  ask: null, fuel: 'tl2', ros: 'very low', flame: 'very low'},
                { if: 'moderate load, less compact',
                  ask: null, fuel: 'tl6', ros: 'moderate', flame: 'low'},
                { if: 'very high load, fluffy',
                  ask: null, fuel: 'tl9', ros: 'moderate', flame: 'low'},
              ],
            },
            { if: 'long-needle pine litter',
              ask: null, fuel: 'tl8', ros: 'moderate', flame: 'low',
              note: 'moderate load and compactness; may include small amount of herbaceous load'
            },
            { if: 'NOT composed of broadleaf or long-needle pine litter.',
              ask: 'does fuel bed include both fine and coarse fuels',
              choices: [
                { if: 'yes, fuel bed DOES include both fine and coarse fuels.',
                  ask: 'the fuel bed is',
                  choices: [
                    { if: 'moderate load, includes small diameter downed logs',
                      ask: null, fuel: 'tl4', ros: 'low', flame: 'low'},
                    { if: 'heavy load, includes larger diameter downed logs',
                      ask: null, fuel: 'tl7', ros: 'low', flame: 'low'},
                  ]
                },
                { if: 'no, fuel bed does NOT include coarse fuels',
                  ask: 'the fuel bed is',
                  choices: [
                    { if: 'moderate load conifer litter',
                      ask: null, fuel: 'tl3', ros: 'very low', flame: 'low'},
                    { if: 'high load conifer litter; light slash or mortality fuel',
                      ask: null, fuel: 'tl5', ros: 'low', flame: 'low'},
                    { if: 'very high load broadleaf litter; heavy needle-drape in otherwise sparse shrub layer',
                      ask: null, fuel: 'tl9', ros: 'moderate', flame: 'moderate'},
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // Slash-Blowdown series
    { if: 'activity fuel (slash) or debris from wind damage (blowdown) (Slash-Blowdown)',
      ask: 'the fuel is a result of',
      choices: [
        { if: 'activity',
          ask: 'the fuel bed has',
          choices: [
            { if: 'fine fuel load of 10 to 20 tons/acre, weighted toward fuels 1 to 3 inches diameter class, depth is less than 1 foot',
              ask: null, fuel: 'sb1', ros: 'moderate', flame: 'low'},
            { if: 'fine fuel load of 7 to 12 tons/acre, evenly distributed across 0 to 0.25, 0.25 to 1, and 1 to 3 inch diameter classes, depth is about 1 foot',
              ask: null, fuel: 'sb2', ros: 'moderate', flame: 'moderate'},
            { if: 'fine fuel load of 7 to 12 tons/acre, weighted toward 0 to 0.25 inch diameter class, depth is more than 1 foot',
              ask: null, fuel: 'sb3', ros: 'high', flame: 'high'},
          ]
        },
        { if: 'blow down',
          ask: 'the fuel bed is',
          choices: [
            { if: 'scattered blowdown with many trees still standing',
              ask: null, fuel: 'sb2', ros: 'moderate', flame: 'moderate'},
            { if: 'moderate blowdown, trees compacted to near the ground',
              ask: null, fuel: 'sb3', ros: 'high', flame: 'high'},
            { if: 'total blowdown, fuelbed not compacted, foliage still attached',
              ask: null, fuel: 'sb4', ros: 'very high', flame: 'very high'},
          ]
        }
      ]
    }
  ]
}

const Fuels = [
  ['1. Nearly pure grass and/or forb type (Grass)',
    ['a. Arid to semiarid climate (rainfall deficient in summer). Extinction moisture content is 15 percent.', [
      'i. GR1 Grass is short, patchy, and possibly heavily grazed. Spread rate moderate; flame length low.',
      'ii. GR2 Moderately coarse continuous grass, average depth about 1 foot. Spread rate high; flame length moderate.',
      'iii. GR4 Moderately coarse continuous grass, average depth about 2 feet. Spread rate very high; flame length high.',
      'iv. GR7 Moderately coarse continuous grass, average depth about 3 feet. Spread rate very high; flame length very high.']
    ],
    ['b. Subhumid to humid climate (rainfall adequate in all seasons). Extinction moisture content is 30 to 40 percent.', [
      'i. GR1 Grass is short, patchy, and possibly heavily grazed. Spread rate moderate; flame length low.',
      'ii. GR3 Very coarse grass, average depth about 2 feet. Spread rate high; flame length moderate.',
      'iii. GR5 Dense, coarse grass, average depth about 1 to 2 feet. Spread rate very high; flame length high.',
      'iv. GR6 Dryland grass about 1 to 2 feet tall. Spread rate very high; flame length very high.',
      'v. GR8 Heavy, coarse, continuous grass 3 to 5 feet tall. Spread rate very high; flame length very high.',
      'vi. GR9 Very heavy, coarse, continuous grass 5 to 8 feet tall. Spread rate extreme; flame length extreme.']
    ]
  ],
  ['2. Mixture of grass and shrub, up to about 50 percent shrub coverage (Grass-Shrub)',
    ['a. Arid to semiarid climate (rainfall deficient in summer). Extinction moisture content is 15 percent.', [
      'i. GS1 Shrubs are about 1 foot high, low grass load. Spread rate moderate; flame length low.',
      'ii. GS2 Shrubs are 1 to 3 feet high, moderate grass load. Spread rate high; flame length moderate.'],
    ],
    ['b. Subhumid to humid climate (rainfall adequate in all seasons). Extinction moisture content is 30 to 40 percent.', [
      'i. GS3 Moderate grass/shrub load, average grass/shrub depth less than 2 feet. Spread rate high; flame length moderate.',
      'ii. GS4 Heavy grass/shrub load, depth greater than 2 feet. Spread rate high; flame length very high.',],
    ]
  ],
  ['3. Shrubs cover at least 50 percent of the site; grass sparse to nonexistent (Shrub)',
    ['a. Arid to semiarid climate (rainfall deficient in summer). Extinction moisture content is 15 percent.', [
      'i. SH1 Low shrub fuel load, fuelbed depth about 1 foot; some grass may be present. Spread rate very low; flame length very low.',
      'ii. SH2 Moderate fuel load (higher than SH1), depth about 1 foot, no grass fuel present. Spread rate low; flame length low.',
      'iii. SH5 Heavy shrub load, depth 4 to 6 feet. Spread rate very high; flame length very high.',
      'iv. SH7 Very heavy shrub load, depth 4 to 6 feet. Spread rate lower than SH5, but flame length similar. Spread rate high; flame length very high.'],
    ],
    ['b. Subhumid to humid climate (rainfall adequate in all seasons). Extinction moisture content is 30 to 40 percent.' [
      'i. SH3 Moderate shrub load, possibly with pine overstory or herbaceous fuel, fuel bed depth 2 to 3 feet. Spread rate low; flame length low.',
      'ii. SH4 Low to moderate shrub and litter load, possibly with pine overstory, fuel bed depth about 3 feet. Spread rate high; flame length moderate.',
      'iii. SH6 Dense shrubs, little or no herb fuel, depth about 2 feet. Spread rate high; flame length high.',
      'iv. SH8 Dense shrubs, little or no herb fuel, depth about 3 feet. Spread rates high; flame length high.',
      'v. SH9 Dense, finely branched shrubs with significant fine dead fuel, about 4 to 6 feet tall; some herbaceous fuel may be present. Spread rate high, flame length very high.']
    ]
  ],
  ['4. Grass or shrubs mixed with litter from forest canopy (Timber-Understory)',
    ['a. Semiarid to subhumid climate. Extinction moisture content is 20 percent.', [
      'i. TU1 Fuelbed is low load of grass and/or shrub with litter. Spread rate low; flame length low.',
      'ii. TU4 Fuelbed is short conifer trees with grass or moss understory. Spread rate moderate; flame length moderate.',
      'iii. TU5 Fuelbed is high load conifer litter with shrub understory. Spread rate moderate; flame length moderate.']
    ],
    ['b. Humid climate. Extinction moisture content is 30 percent.', [
      'i. TU2 Fuelbed is moderate litter load with shrub component. Spread rate moderate; flame length low.',
      'ii. TU3 Fuelbed is moderate litter load with grass and shrub components. Spread rate high; flame length moderate.']
    ]
  ],
  ['5. Dead and down woody fuel (litter) beneath a forest canopy (Timber Litter)',
    ['a. Fuelbed is recently burned but able to carry wildland fire.', [
      'i. TL1 Light to moderate load, fuels 1 to 2 inches deep. Spread rate very low; flame length very low.']
    ],
    ['b. Fuelbed not recently burned.', [
      'i. Fuelbed composed of broadleaf (hardwood) litter.', [
        '1. TL2 Low load, compact. Spread rate very low; flame length very low.',
        '2. TL6 Moderate load, less compact. Spread rate moderate; flame length low.',
        '3. TL9 Very high load, fluffy. Spread rate moderate; flame length moderate.' ],
      'ii. Fuelbed composed of long-needle pine litter.', [
        '1. TL8 moderate load and compactness may include small amount of herbaceous load. Spread rate moderate; flame length low.'],
      'iii. Fuelbed not composed broadleaf or long-needle pine litter.', [
        '1. Fuelbed includes both fine and coarse fuels.', [
          'a. TL4 Moderate load, includes small diameter downed logs. Spread rate low; flame length low.',
          'b. TL7 Heavy load, includes larger diameter downed logs. Spread rate low; flame length low.'],
        '2. Fuelbed does not include coarse fuels.', [
          'a. TL3 Moderate load conifer litter. Spread rate very low; flame length low.',
          'b. TL5 High load conifer litter; light slash or mortality fuel. Spread rate low; flame length low.',
          'c. TL9 Very high load broadleaf litter; heavy needle-drape in otherwise sparse shrub layer. Spread rate moderate; flame length moderate.']
        ]
      ]
    ]
  ],
  ['6. Activity fuel (slash) or debris from wind damage (blowdown) (Slash-Blowdown)',
    ['a. Fuelbed is activity fuel.', [
      'i. SB1 Fine fuel load is 10 to 20 tons/acre, weighted toward fuels 1 to 3 inches diameter class, depth is less than 1 foot. Spread rate moderate; flame length low.',
      'ii. SB2 Fine fuel load is 7 to 12 tons/acre, evenly distributed across 0 to 0.25, 0.25 to 1, and 1 to 3 inch diameter classes, depth is about 1 foot. Spread rate moderate; flame length moderate.',
      'iii. SB3 Fine fuel load is 7 to 12 tons/acre, weighted toward 0 to 0.25 inch diameter class, depth is more than 1 foot. Spread rate high; flame length high.']
    ],
    ['b. Fuelbed is blowdown.', [
      'i. SB2 Blowdown is scattered, with many trees still standing. Spread rate moderate; flame length moderate.',
      'ii. SB3 Blowdown is moderate, trees compacted to near the ground. Spread rate high; flame length high.',
      'iii. SB4 Blowdown is total, fuelbed not compacted, foliage still attached. Spread rate very high; flame length very high.']
    ]
  ],
  ['7. Insufficient wildland fuel to carry wildland fire under any condition (Nonburnable)',
    ['a. NB1 Urban or suburban development; insufficient wildland fuel to carry wildland fire.',
    'b. NB2 Snow/ice.',
    'c. NB3 Agricultural field, maintained in nonburnable condition.',
    'd. NB8 Open water.',
    'e. NB9 Bare ground.']
  ]
]
