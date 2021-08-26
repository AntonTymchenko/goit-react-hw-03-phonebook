import React from "react";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };
  inputGetValue = (e) => {
    const item = e.currentTarget.name;

    this.setState({ [item]: e.currentTarget.value });
  };

  formHandleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.formHandleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.inputName}
            onChange={this.inputGetValue}
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Ivan Ivanov"
          />
        </label>
        <label>
          Number
          <input
            className={s.inputFrom}
            onChange={this.inputGetValue}
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="098-111-22-33"
          />
          <button type="submit" className={s.AddBtn}>
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
