#!/usr/bin/env node
import { rules, evenCheckDataGen } from '../src/games/brain-even.js';
import gameEngine from '../src/index.js';

gameEngine(rules, evenCheckDataGen);
