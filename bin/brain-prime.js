#!/usr/bin/env node
import { rules, primeDataGen } from '../src/games/brain-prime.js';
import gameEngine from '../src/index.js';

gameEngine(rules, primeDataGen);
