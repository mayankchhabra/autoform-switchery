mayankchhabra:autoform-switchery
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type for Boolean values, "switchery", which renders using the [switchery](https://abpetkov.github.io/switchery/) plugin.

## Prerequisites

### AutoForm

In a Meteor app directory, enter:

```bash
$ meteor add aldeed:autoform
```

## Installation

In a Meteor app directory, enter:

```bash
$ meteor add mayankchhabra:autoform-switchery
```

## Usage

Specify "switchery" for the `type` attribute of a Boolean input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
{
  approve: {
    type: Boolean,
    autoform: {
      type: "switchery"
    }
  }
}
```

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.

