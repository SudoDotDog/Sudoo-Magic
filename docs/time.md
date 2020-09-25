# Time

## Time Builder Usage

```ts
import { TimeBuilder } from "@sudoo/magic";

setTimeout(() => {
    doSomething();
}, TimeBuilder.from({
    second: 1,
}).inMilliseconds());
```
