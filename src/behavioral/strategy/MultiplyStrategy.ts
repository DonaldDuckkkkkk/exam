import { Strategy } from './Strategy';

export class MultiplyStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}
