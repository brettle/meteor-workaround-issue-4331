# brettle:workaround-issue-4331

[![Build Status](https://travis-ci.org/brettle/meteor-accounts-workaround-issue-4331.svg?branch=master)](https://travis-ci.org/brettle/meteor-accounts-workaround-issue-4331)

Workaround [Meteor issue #4331](https://github.com/meteor/meteor/issues/4331) so that all of the client-side callbacks registed
with `Accounts.onLogin()` and `Accounts.onLoginFailure()` are called.

## Installation

```sh
meteor add brettle:workaround-issue-4331
```

## Usage

Just install it and it should work.

## How it Works

It monkey patches `Accounts.onLogin()`, `Accounts.onLoginFailure()`, and
`Accounts.callLoginMethod()`. See the source for details.
