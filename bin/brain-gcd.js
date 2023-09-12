#!/usr/bin/env node
import { rules, gcdDataGen} from '../src/games/brain-gcd.js';
import gameEngine from '../src/index.js';

gameEngine(rules, gcdDataGen);
