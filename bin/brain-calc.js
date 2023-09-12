#!/usr/bin/env node
import { rules, calcDataGen } from '../src/games/brain-calc.js';
import gameEngine from '../src/index.js';

gameEngine(rules, calcDataGen);
