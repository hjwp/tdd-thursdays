# Setup


* assumes you're running node v10.

If you're using nvm:

```sh
nvm use .
```

## install jasmine:

```sh
npm install
```


## run the tests:

```sh
make test
# or
npm test
```

What you should see:

```
> jstestbase@1.0.0 test /home/harry/workspace/jstestbase
> jasmine

Randomized with seed 77974
Started
.


1 spec, 0 failures
Finished in 0.004 seconds
Randomized with seed 77974 (jasmine --random=true --seed=77974)
```

## auto-rerun:

```sh
make watch-tests
```

(you may need to install "entr" with `apt install entr` or `brew install entr`)


## find our files:

* tests live in `spec/Specs.js`
* source lives in `lib/index.js`
