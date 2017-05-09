ko.components.register('cen-labels', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = new CenLabelsModel(params.options);
            if (params.options.hasOwnProperty('model')) {
                params.options.model = model;
            }
            return model;
        }
    },
    template: { element: 'LabelsTemplate' }
});

function CenLabelsModel(params) {
    "use strict";
    this.TestLabel1 = ko.observable(params.test1 || '');
    this.TestLabel2 = params.test2 || '';

    this.ChangeTest1 = function () {
        this.TestLabel1('AAAAA');
    }
}