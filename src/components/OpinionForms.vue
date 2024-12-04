<template>
  <div class="container">
    <div class="form-container">
      <a-form-model
        ref="ruleForm"
        :model="form"
        layout="vertical"
      >
        <a-form-model-item ref="name" label="Nombre" prop="name">
          <a-input
            v-model="form.name"
            placeholder="nombre"
          />
        </a-form-model-item>
        <a-form-model-item label="Opinion">
          <a-input
            v-model="form.opinion"
            type="textarea"
            placeholder="Tu opinion debe ir aqui..."
          />
        </a-form-model-item>
        <a-form-model-item class="addButton">
          <a-button type="primary" @click="addOpinion">
            {{ labelFormButton }}
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div class="opinion-container">
      <h2>A continuación podrás ver tu opinión</h2>
      <a-alert v-if="opinionList.length==0" type="error" message="No existen opiniones para mostrar" banner style="text-align: left;"/>
      <div v-else>
        <a-collapse expand-icon-position="right">
          <a-collapse-panel v-for="opinion in opinionList" :key="opinion.key" :header="'Opinion creada por: ' + opinion.name" style="text-align: left;">
            <p><b>Opinion</b> {{ opinion.opinion }}</p>
            <div style="display: flex; gap: .5rem">
              <a-button type="danger" @click="deleteOpinion(opinion.key)">
                Eliminar
              </a-button>
              <a-button style="background-color: rgb(255 193 7);" @click="editOpinion(opinion.key)">
                Editar
              </a-button>
            </div>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OpinionForms',
  data() {
    return {
      labelFormButton: 'Agregar',
      form: {
        name: '',
        opinion: ''
      },
      opinionList: []
    }
  },
  methods: {
    addOpinion() {
      if(this.form.name==='' || this.form.opinion==='' ) {
        return
      }

      if(this.labelFormButton=='Actualizar') {

        const indexEdit = this.opinionList.findIndex(opinion => opinion.key === this.form.key)

        const temporalForm = {
          key: Date.now(),
          name: this.form.name,
          opinion: this.form.opinion
        }

        console.log('Indice del array: ', indexEdit)

        // this.opinionList[indexEdit] = JSON.parse(JSON.stringify(this.form));
        // this.opinionList[indexEdit].name = this.form.name
        // this.opinionList[indexEdit].opinion = this.form.opinion

        this.opinionList[indexEdit] = temporalForm

        this.labelFormButton = 'Agregar'

      } else {
        // Si no estamos editando, agregamos una nueva opinión
        const newOpinion = {
          key: Date.now(),  // Usamos el timestamp como una clave única
          name: this.form.name,
          opinion: this.form.opinion
        };
        this.opinionList.push(newOpinion);
      }

      this.resetForm()
      
      // MOSTRAR EL ESTADO DEL ARRAY
      console.log(this.opinionList)

    },
    editOpinion(formKey) {
      const opinionEdit = this.opinionList.find(opinion => opinion.key === formKey)
      this.form = JSON.parse(JSON.stringify(opinionEdit));

      this.labelFormButton = 'Actualizar'

      console.log('Objeto encontrado', opinionEdit)
      console.log('Objeto forms luego de editar', this.form)

      // MOSTRAR EL ESTADO DEL ARRAY
      console.log(this.opinionList)
    },
    deleteOpinion(key) {
      this.opinionList = this.opinionList.filter(opinion => opinion.key !== key)

      // MOSTRAR EL ESTADO DEL ARRAY
      console.log(this.opinionList)
    },
    resetForm() {
      // Reiniciar completamente el formulario
      this.form = { name: '', opinion: '', key: null }; // Reseteo total de todos los campos
    }
  }
}
</script>
<style scoped>
.container {
  width: 70%;
  margin: auto;
}
.addButton {
  display: flex;
  justify-content: left;
}
</style>