# Servoy Tutorial

This repository contains a Servoy tutorial solution together with supporting modules and resources used by the project. It is intended as a simple working example for building and exploring a Servoy application with forms, calculations, relations, value lists, and reusable utility code.

## Chapters

- [1. Introduction](#1-introduction)
- [2. Project Structure](#2-project-structure)
- [3. Quick Start](#3-quick-start)
- [4. Main Solution](#4-main-solution)
- [5. Supporting Modules](#5-supporting-modules)

## 1. Introduction

The main solution in this repository is `Tutorial`. It demonstrates a small order-entry style setup with order records, related order details, calculated totals, and simple UI components in the Servoy NG Client.

The repository also includes reusable helper modules such as `svyUtils` and `svySearch`

## 2. Project Structure

- `Tutorial/` - Main Servoy solution with forms, datasources, relations, medias, and value lists
- `resources/` - Shared Servoy resources and datasource metadata
- `svySearch/` - Search-related helper module
- `svyUtils/` - Utility module with common helpers used across Servoy solutions

## 3. Quick Start

1. Open Servoy Developer.
2. Import or open this workspace.
3. Load the `Tutorial` solution.
4. Start the NG Client.
5. Open the `orders` form and test order creation, item entry, subtotals, and totals.

## 4. Main Solution

The `Tutorial` solution contains:

- forms for working with order data
- datasource calculations such as subtotal and order total
- relations between orders, customers, products, and order details
- media assets and web package dependencies for the UI

## 5. Supporting Modules

`svyUtils` provides general-purpose utility code for common tasks such as date handling, validation, networking, logging, and UI helpers.

`svySearch` provides search-related support logic that can be reused by Servoy solutions.

`resources` contains shared metadata and datasource definitions used by the solution.
