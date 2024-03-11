const forms = require("forms");

const fields = forms.fields;
const validators = forms.validators;

const createMemberForm = () => {
    return forms.create({
        'username': fields.string({
            required: true,
            errorAfterField: true,
            cssClasses: {
                label: ['form-label']
            }
        }),
        'email': fields.string({
            required: true,
            errorAfterField: true,
            cssClasses: {
                label: ['form-label']
            }
        })
    });
};

module.exports = { createMemberForm };