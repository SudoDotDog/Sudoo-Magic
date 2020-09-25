# Time

## Time Builder Usage

```ts
import { TimeBuilder } from "@sudoo/magic";

setTimeout(() => {
    doSomething();
}, TimeBuilder.from({
    second: 1,
}).inMilliseconds()); // Return 1000
```

The `TimeBuilder` class also support return time value by seconds.

```ts
import { TimeBuilder } from "@sudoo/magic";

TimeBuilder.from({
    hour: 1,
}).inMilliseconds(); // Return 3600
```
