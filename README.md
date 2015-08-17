# brettle:workaround-issue-4331

Workaround meteor/meteor#4331 so that all of the client-side callbacks registed
with `Accounts.onLogin()` and `Accounts.onLoginFailure` are called.

## Installation

```sh
meteor add brettle:workaround-issue-4331
```

## Usage

Just install it and it should work.

## How it Works

It monkey patches `Accounts.onLogin()`, `Accounts.onLoginFailure()`, and
`Accounts.callLoginMethod()`. See the source for details.
