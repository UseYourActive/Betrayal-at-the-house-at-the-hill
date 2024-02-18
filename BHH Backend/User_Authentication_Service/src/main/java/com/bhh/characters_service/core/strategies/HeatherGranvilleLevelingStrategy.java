package com.bhh.characters_service.core.strategies;

import com.bhh.characters_service.persistence.entities.Explorer;
import com.bhh.characters_service.persistence.enums.TraitType;

public class HeatherGranvilleLevelingStrategy implements LevelingStrategy {
    private static final int[] SPEED_THRESHOLDS = {0, 3, 3, 4, 5, 6, 6, 7, 8};
    private static final int[] MIGHT_THRESHOLDS = {0, 3, 3, 3, 4, 5, 6, 7, 8};
    private static final int[] SANITY_THRESHOLDS = {0, 3, 3, 3, 4, 5, 6, 6, 6};
    private static final int[] KNOWLEDGE_THRESHOLDS = {0, 2, 3, 3, 4, 5, 6, 7, 8};

    @Override
    public void levelUp(Explorer explorer) {
        checkDeath(explorer);

        if (explorer.getIsDead()) {
            return;
        }

        levelUpTrait(explorer, explorer.getSpeed(), SPEED_THRESHOLDS, TraitType.SPEED);
        levelUpTrait(explorer, explorer.getMight(), MIGHT_THRESHOLDS, TraitType.MIGHT);
        levelUpTrait(explorer, explorer.getSanity(), SANITY_THRESHOLDS, TraitType.SANITY);
        levelUpTrait(explorer, explorer.getKnowledge(), KNOWLEDGE_THRESHOLDS, TraitType.KNOWLEDGE);
    }

    @Override
    public void performLevelUpActions(Explorer explorer, int newLevel, TraitType trait) {
        int levelDifference = newLevel - explorer.getTraitLevel();

        if (levelDifference > 0) {
            int[] thresholds;
            int currentTraitValue;

            switch (trait) {
                case SPEED -> {
                    thresholds = SPEED_THRESHOLDS;
                    currentTraitValue = explorer.getSpeed();
                    explorer.setSpeed(thresholds[newLevel]);
                }
                case MIGHT -> {
                    thresholds = MIGHT_THRESHOLDS;
                    currentTraitValue = explorer.getMight();
                    explorer.setMight(thresholds[newLevel]);
                }
                case SANITY -> {
                    thresholds = SANITY_THRESHOLDS;
                    currentTraitValue = explorer.getSanity();
                    explorer.setSanity(thresholds[newLevel]);
                }
                case KNOWLEDGE -> {
                    thresholds = KNOWLEDGE_THRESHOLDS;
                    currentTraitValue = explorer.getKnowledge();
                    explorer.setKnowledge(thresholds[newLevel]);
                }
                default -> {
                    return; // Invalid trait
                }
            }

            explorer.setTraitLevel(newLevel);
        }
    }
}
