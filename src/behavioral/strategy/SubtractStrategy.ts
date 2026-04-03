import { Strategy } from './Strategy';

export class SubtractStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}
