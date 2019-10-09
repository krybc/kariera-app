export abstract class ViewModel<T> {
  protected constructor(
    protected apiModel: T
  ) {}

  abstract toApiModel(): T;
}
