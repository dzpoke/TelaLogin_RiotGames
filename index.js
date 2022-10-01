           
        const form     = document.querySelector('.form_global')
        const username = document.querySelector('#user')
        const password = document.querySelector('#password')

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            checkInputs()
        })

        function checkInputs(){

            const usernameValue = username.value.trim()
            const passwordValue = password.value.trim()
            
            if(usernameValue === '')
            {
                setErrorFor(username)
            }
            else
            {
                setSuccessFor(username)
            }

            if(passwordValue === '')
            {
                setErrorFor(password)
            }
            else
            {
                setSuccessFor(password)
            }
        }

        function setErrorFor(input) {

            const caixa_input = input.parentElement;

            caixa_input.className = 'caixa_input error'
        }

        function setSuccessFor(input) {
            const caixa_input = input.parentElement;

            caixa_input.className = 'caixa_input success'
        }
