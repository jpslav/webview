define (require) ->
  $ = require('jquery')
  SearchHeaderView = require('cs!../header/header')
  BaseView = require('cs!helpers/backbone/views/base')
  template = require('hbs!./advanced-template')
  require('less!./advanced')

  return class AdvancedSearchView extends BaseView
    template: template

    regions:
      header: '.header'

    onRender: () ->
      @regions.header.show(new SearchHeaderView())
