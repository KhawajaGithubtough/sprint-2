function saveTask()
            {
                let taskdstatus=document.querySelector('input[name="com"]:checked').value
                let workstatus=document.getElementById('ip').value
                let workstatus1=document.getElementById('bp').value
                let taskstatus=document.getElementById('ct').value
                var des=document.getElementById('des').value

                let task={
                    taskdonestatus:taskdstatus,
                    workstatus:workstatus,
                    workstatus1:workstatus1,
                    taskstatus:taskstatus,
                    description:des
                }
                console.log(task)
                localStorage.setItem("task_data",JSON.stringify(task))
            }