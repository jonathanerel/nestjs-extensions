import 'reflect-metadata';
import { Controller } from '@nestjs/common';

/**
 * Defines the Router. The router can inject dependencies through constructor.
 * Those dependencies have to belong to the same module.
 */
export const Router = Controller;