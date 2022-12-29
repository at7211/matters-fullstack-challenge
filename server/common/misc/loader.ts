import DataLoader from 'dataloader';

export abstract class Loader<K, V> {
  protected abstract loadMethod: (keys: readonly K[]) => Promise<V[]>;
  protected loaderOptions: DataLoader.Options<K, V, any> | undefined =
    undefined;

  load(key: K, loadersCache: Map<any, any>) {
    if (!loadersCache.has(this)) {
      loadersCache.set(
        this,
        new DataLoader(this.loadMethod, this.loaderOptions),
      );
    }

    const loader = loadersCache.get(this) as DataLoader<K, V>;

    return loader.load(key);
  }

  loadMany(keys: K[], loadersCache: Map<any, any>) {
    if (!loadersCache.has(this)) {
      loadersCache.set(
        this,
        new DataLoader(this.loadMethod, this.loaderOptions),
      );
    }

    const loader = loadersCache.get(this) as DataLoader<K, V>;

    return loader.loadMany(keys);
  }
}
