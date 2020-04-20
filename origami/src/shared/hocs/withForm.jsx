import React from "react";

export default function withForm(Cmp, initialState, schema) {
  return class extends React.Component {
    state = {
      form: initialState,
      errors: null
    };

    controlChangeHandlerFactory = (name) => {
      let id;
      return (e) => {
        const newValue = e.target.value;
        if (id) {
          clearTimeout(id);
          id = null;
        }

        id = setTimeout(() => {
          this.setState(({ form }) => {
            return { form: { ...form, [name]: newValue } };
          });

          id = null;
        }, 300);
      };
    };

    getFormState = () => {
      return this.state.form;
    };

    getErrorsState = () => {
      return this.state.errors;
    };

    runValidations = () => {
      return schema
        .validate(this.state.form, { abortEarly: false })
        .then(() => this.state.form)
        .catch((err) => {
          const errors = err.inner.reduce((res, { path, message }) => {
            res[path] = (res[path] || []).concat(message);
            return res;
          }, {});
          this.setState({ errors });
        });
    };

    render() {
      return (
        <Cmp
          {...this.props}
          controlChangeHandlerFactory={this.controlChangeHandlerFactory}
          getFormState={this.getFormState}
          getErrorsState={this.getErrorsState}
          runValidations={this.runValidations}
        ></Cmp>
      );
    }
  };
}
