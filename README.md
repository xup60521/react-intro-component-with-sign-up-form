# **Frontend Mentor Challenge - Intro component with sign up form**

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1 "https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1").

## Table of contents

-   [Overview](#overview)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
        -   [react-hook-form error message](#react-hook-form-error-message)
-   [Resources](#resources)

## Overview

-   View the optimal layout for the site depending on their device's screen size

-   See hover states for all interactive elements on the page

-   Receive an error message when the `form` is submitted if:

    -   Any `input` field is empty. The message for this error should say _"\[Field Name\] cannot be empty"_

    -   The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

Links:

-   GitHub Repo: <https://github.com/xup60521/react-intro-component-with-sign-up-form>

-   Website: <https://xup60521.github.io/react-intro-component-with-sign-up-form/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

-   React (powered by vite)

-   TailwindCSS

-   react-hook-form

-   sonner

### What I learned

#### react-hook-form error message

`useForm` returns a `formState` which includes an `errors` object containing all errors received from the form. For example, if there's an error in the `first_name` field, the `errors` object would have a `first_name` property. We can leverage this to display error messages.

```tsx
{
    "first_name" in errors && (
        <Fragment>
            <img
                src={IconError}
                alt="first name error"
                className="...some tailwindcss classes"
            />
            <span className="tailwindcss_classes">
                {errors.first_name?.message}
            </span>
        </Fragment>
    );
}
```

By implementing this approach, we can create our own error message component without relying on additional packages like `@hookform/error-message`.

## Resources

-   TailwindCSS Docs - <https://tailwindcss.com/docs>

-   Google font - <https://fonts.google.com>

-   react-hook-form docs - <https://react-hook-form.com/docs>

-   sonner docs - <https://sonner.emilkowal.ski/getting-started>
