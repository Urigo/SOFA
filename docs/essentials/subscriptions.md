---
title: Subscription
---

Sofa enables you to run GraphQL Subscriptions through WebHooks. It has a special API to start, update, and stop a subscription.

- `POST /webhook` - starts a subscription
- `DELETE /webhook/:id` - stops it
- `POST /webhook/:id`- updates it

#### Starting a subscription

To start a new subscription you need to include following data in request's body:

- `subscription` - subscription's name, matches the name in GraphQL Schema
- `variables` - variables passed to run a subscription (optional)
- `url` - an url of your webhook receiving endpoint

After sending it to `POST /webhook` you're going to get in return a unique ID that is your started subscription's identifier.

```json
{
  "id": "SUBSCRIPTION-UNIQUE-ID"
}
```

#### Stoping a subscription

In order to stop a subscription, you need to pass its id and hit `DELETE /webhook/:id`.

#### Updating a subscription

Updating a subscription looks very similar to how you start one. Your request's body should contain:

- `variables` - variables passed to run a subscription (optional)

After sending it to `POST /webhook/:id` you're going to get in return a new ID:

```json
{
  "id": "SUBSCRIPTION-UNIQUE-ID"
}
```

#### Example

Given the following schema:

```graphql
type Subscription {
  onBook: Book
}
```

Let's start a subscription by sending that to `POST /webhook`:

```json
{
  "subscription": "onBook",
  "variables": {},
  "url": "https://app.com/new-book"
}
```

In return we get an `id` that we later on use to stop or update subscription:

    DELETE /webhook/:id
