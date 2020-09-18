import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

export default function Trivia(){
  return(
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Pregunta 1',
        text: 'En donde es el Tomorrowland?'
      },
      {
        title: 'Pregunta 2',
        text: 'En que ano se origino?'
      },
      {
        title: 'Pregunta 3',
        text: 'Cuantos escenarios tiene?'
      },
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        Swal.fire({
          title: 'All done!',
          html: `
            Your answers:
            <pre><code>${answers}</code></pre>
          `,
          confirmButtonText: 'Lovely!'
        })
      }
    })
   )
 }