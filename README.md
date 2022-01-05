
<!-- README.md is generated from README.Rmd. Please edit that file -->

# detourr

Animations for {tourr} using htmlwidgets for performance and
portability.

# Installation

Install this package by running the following in R:

``` r
remotes::install_github("casperhart/detourr")
```

# Examples

``` r
# 2D scatter
library(tourr)
library(detourr)
animate_tour(
  olive,
  display = display_scatter(tour_aes(colour = region)),
)
```

``` r
# 3D scatter
animate_tour(
  flea,
  grand_tour(3),
  display_scatter(tour_aes(colour = species))
)
```

# Development

## Getting Started

This project uses TypeScript code which needs to be compiled and bundled
for the package to work. To do this, you will need `node.js`, and `yarn`
installed.

After cloning this repository, you can install the node.js dependencies
via:

``` bash
yarn install
```

Compile and bundle the TypeScript code and install the R package from
source by running:

``` bash
yarn run build
```

The TypeScript code which powers the HTMLWidgets can also be run as a
standalone app using `webpack-dev-server` as follows:

``` bash
yarn run start-dev
```

This will start the webpack dev server, which will automatically
recompile and reload the TypeScript code as changes are made. The sample
data and HTML used by the dev server can be found in `./dev`, and are
loaded in to memory based on the configuration in
`webpack/dev.config.ts`

If you wish to make changes to the HTML files in `dev/`, or debug the
`yarn run start-dev` command, you can instead run `yarn run build-dev`.
This will load the files in `dev/` in to a folder called `dev_build/`
rather than in to memory, which can make debugging easier.

## Adding a new widget

The following is a rough checklist for creating a new widget /
visualisation for the {detourr} package. This uses `display_scatter_3d`
as an example.

1.  `srcts/display_scatter_3d`: The main logic for the
    `display_scatter_3d` widget. Note that the main exported class from
    `index.ts` contains a `renderValue` and `resize` method (inherited
    from `DisplayScatter`). This exported class and methods are used by
    the HTMLWidgets Javascript binding.
2.  `inst/htmlwidgets/display_scatter_3d.js`: Javascript binding for
    HTMLWidgets.
3.  `inst/htmlwidgets/display_scatter_3d.yaml`: widget dependencies.
    Note that the dependencies are all stored under
    `inst/htmlwidgets/lib`, and should not be modified manually. These
    files are automatically bundled by webpack based on the code in
    `srcts/` and the configuration in `webpack/package.config.json`.
4.  `R/display_scatter.r`: R binding for the widget. Returns an `init`
    function used by `animate_tour.r` to define the widget to create.
    Note that `display_scatter.r` services both the `display_scatter_3d`
    and `display_scatter_2d` widgets. See the [HTMLWidgets
    Documentation](https://www.htmlwidgets.org/develop_intro.html) for
    more information on the Javascript binding, R binding, and widget
    dependencies.
5.  `dev/display_scatter_3d`: sample data and HTML file used for
    development. The presence of these files allows the widget to be run
    standalone, without the need to build and run the R package every
    time a change is made. These files are loaded in to memory when the
    webpack dev server is started, based on the configuration in
    `webpack/dev.config.ts`.
6.  `webpack/dev.config.ts`: webpack development config. Each widget has
    an entry in this file under `entry`, pointing to the `index.ts` file
    for that widget, and a pattern under `CopyPlugin` so that it knows
    to find dev assets (`index.html` and `sample_data.json`) under
    `dev/display_scatter_3d`. This config file is used when running
    `yarn run start-dev` and `yarn run build-dev`.
7.  `webpack/package.config.ts`: webpack configuration used when
    building the package. Each widget has a value under `entry` in this
    file.
