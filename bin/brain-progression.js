#!/usr/bin/env node
import { rules, progressionDataGen } from '../src/games/brain-progression.js';
import gameEngine from '../src/index.js';

gameEngine(rules, progressionDataGen);
