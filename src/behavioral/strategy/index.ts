import { Context } from './Context';
import { AddStrategy } from './AddStrategy';
import { SubtractStrategy } from './SubtractStrategy';
import { MultiplyStrategy } from './MultiplyStrategy';

console.log('--- Strategy Pattern Example: Human Math ---');

const context = new Context(new AddStrategy());
console.log('Addition (5, 3):', context.executeStrategy(5, 3));

context.setStrategy(new SubtractStrategy());
console.log('Subtraction (5, 3):', context.executeStrategy(5, 3));

context.setStrategy(new MultiplyStrategy());
console.log('Multiplication (5, 3):', context.executeStrategy(5, 3));
