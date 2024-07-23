[Back to main](./README.md)

# Deobfuscation

To begin with the deobfuscation of the code we extract the href attribute from the button and remove the beginning `javascipt:`

To deobfuscate the code we use [synchrony](https://github.com/relative/synchrony), a Javascript cleaner, and deobfuscator. However initially this gives an error as there are unexpected tokens. This is due to the ampersands being represented in character entities (`&amp;`) instead of the normal character `&`. This can simply be fixed by carrying out a Replace on the code. In this case replace all occurrences of `&amp;` with `&`.

This modified code can then be put into synchrony, which will then clean, and deobfuscate it.

This was done by running:

```bash
synchrony deobfuscate ./obfuscated.js
```

This will then produce a Javascript file containing deobfuscated code called `obfuscated.cleaned.js`, which I then cleaned up using [Prettier](https://prettier.io/).

Looking at this file we can see that it has been successfully deobfuscated.

Obfuscated and deobfuscated copies of the Javascript can be found in the [Archives](./archives.md).