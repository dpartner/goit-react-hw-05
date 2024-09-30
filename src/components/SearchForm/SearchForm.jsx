import { Form, Formik, Field } from 'formik'
import s from './SearchForm.module.css'

const SearchForm = ({onSearch}) => {

  function handleSubmit(value) {
    onSearch(value.query)
  }

  return (
    <Formik initialValues={{query: ''}} onSubmit={handleSubmit}>
      <Form>
        <Field className={s.inputQuery} type='text' name='query'></Field>
        <button className={s.submit} type='submit'>Search</button>
      </Form>
    </Formik>
  )
}

export default SearchForm