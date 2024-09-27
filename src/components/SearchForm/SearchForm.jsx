import { Form, Formik, Field } from 'formik'

const SearchForm = ({onSearch}) => {

  function handleSubmit(value) {
    console.log(value.query)
    onSearch(value.query)
  }

  return (
    <Formik initialValues={{query: ''}} onSubmit={handleSubmit}>
      <Form>
        <Field type='text' name='query'></Field>
        <button type='submit'>Search</button>
      </Form>
    </Formik>
  )
}

export default SearchForm