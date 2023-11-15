export interface UseCase {
    handle(request: unknown): unknown;
}