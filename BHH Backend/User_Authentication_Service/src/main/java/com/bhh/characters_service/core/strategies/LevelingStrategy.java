package com.bhh.characters_service.core.strategies;

import com.bhh.characters_service.persistence.entities.Explorer;
import com.bhh.characters_service.persistence.enums.TraitType;

public interface LevelingStrategy {
    default void levelUpTrait(Explorer explorer, int currentTraitPoints, int[] thresholds, TraitType traitType) {
        // Find the current level based on the current trait points
        int currentLevel = getCurrentLevel(currentTraitPoints, thresholds);

        // Find the next level threshold
        int nextLevelThreshold = currentLevel < thresholds.length - 1 ? thresholds[currentLevel + 1] : Integer.MAX_VALUE;

        if (currentTraitPoints >= nextLevelThreshold) {
            // Increment the current level by 1
            int newLevel = currentLevel + 1;
            // If needed, perform any additional logic for level-up actions
            performLevelUpActions(explorer, newLevel, traitType);
        }
    }

    default void checkDeath(Explorer explorer) {
        // Check if any trait is at or below zero
        if (explorer.getSpeed() <= 0 || explorer.getMight() <= 0 || explorer.getSanity() <= 0 || explorer.getKnowledge() <= 0) {
            // Set the explorer as dead
            explorer.setIsDead(true);
        }
    }

    // Helper method to determine the current level based on trait points and thresholds
    default int getCurrentLevel(int currentTraitPoints, int[] thresholds) {
        int currentLevel = 0;
        for (int i = 0; i < thresholds.length; i++) {
            if (currentTraitPoints >= thresholds[i]) {
                currentLevel = i;
            } else {
                break; // No need to continue once the current trait points are below the threshold
            }
        }
        return currentLevel;
    }

    void levelUp(Explorer explorer);

    // Additional method for performing actions when a trait levels up
    void performLevelUpActions(Explorer explorer, int newLevel, TraitType trait);
}
