// CPU Status

// CPU 1

    // Test 1
    let work_list1 = document.querySelector('.work-list1');
    let work_list2 = document.querySelector('.work-list2');
    let work_list3 = document.querySelector('.work-list3');
    let work_list4 = document.querySelector('.work-list4');

    let cpu_img1 = document.querySelector('.cpu_img1');
    let status1 = document.querySelector('.status1');

    let cpu_img2 = document.querySelector('.cpu_img2');
    let status2 = document.querySelector('.status2');

    let cpu_img3 = document.querySelector('.cpu_img3');
    let status3 = document.querySelector('.status3');
    
    let cpu_img4 = document.querySelector('.cpu_img4');
    let status4 = document.querySelector('.status4');

    let status11 = document.querySelector('.status11');
    let status22 = document.querySelector('.status22');
    let status33 = document.querySelector('.status33');
    let status44 = document.querySelector('.status44');
    let type11 = document.querySelector('.type11');
    let type22 = document.querySelector('.type22');
    let type33 = document.querySelector('.type33');
    let type44 = document.querySelector('.type44');

    function updateText(){

        let cpu2Array = [];
        cpu2ToArray(cpu2.head, cpu2.length);

        function cpu2ToArray(list, length){
            if(length == 0){
                return;
            }
            else{
                cpu2Array.push(list.data);
                return cpu2ToArray(list.next, length-1);
            }
        }

        let cpu3Array = [];
        cpu3ToArray(cpu3.head, cpu3.length);

        function cpu3ToArray(list, length){
            if(length == 0){
                return;
            }
            else{
                cpu3Array.push(list.data);
                return cpu3ToArray(list.next, length-1);
            }
        }

        let cpu4Array = [];
        cpu4ToArray(cpu4.head);

        function cpu4ToArray(list){
            if(list == null){
                return;
            }
            else{
                cpu4Array.push(list.data);
                return cpu4ToArray(list.right) + cpu4ToArray(list.left);
            }
        }

        work_list1.innerHTML = '';
    
        for(let i = 0; i < CPU.array.length && i < 5; i++){
            work_list1.innerHTML += `   <div class="row work-row" style="padding-left: 12px; height: 25px;">
                                    <div class="col-lg-6 work_name work1_name1">${CPU.array[i].name}</div>
                                    <div class="col-lg-4 work_time work1_time1">${CPU.array[i].remainingTime}</div>
                                    <div class="col-lg-2 work_prio work1_prio1">${CPU.array[i].priority}</div>
                                </div>
                                <hr class="c-orange">`;
        }

        work_list2.innerHTML = '';

        for(let i = 0; i < cpu2.length && i < 5; i++){
            work_list2.innerHTML += `   <div class="row work-row2" style="padding-left: 12px; height: 25px;">
                                            <div class="col-lg-6 work_name work2_name1">${cpu2Array[i].name}</div>
                                            <div class="col-lg-4 work_time work2_time1">${cpu2Array[i].remainingTime}</div>
                                            <div class="col-lg-2 work_prio work2_prio1">${cpu2Array[i].priority}</div>
                                        </div>
                                        <hr class="c-orange">`;
        }

        work_list3.innerHTML = '';

        for(let i = 0; i < cpu3.length && i < 5; i++){
            work_list3.innerHTML += `   <div class="row work-row3" style="padding-left: 12px; height: 25px;">
                                            <div class="col-lg-6 work_name work2_name1">${cpu3Array[i].name}</div>
                                            <div class="col-lg-4 work_time work2_time1">${cpu3Array[i].remainingTime}</div>
                                            <div class="col-lg-2 work_prio work2_prio1">${cpu3Array[i].priority}</div>
                                        </div>
                                        <hr class="c-orange">`;
        } 

        work_list4.innerHTML = '';

        for(let i = 0; i < cpu4.length && i < 5; i++){
            work_list4.innerHTML += `   <div class="row work-row3" style="padding-left: 12px; height: 25px;">
                                            <div class="col-lg-6 work_name work2_name1">${cpu4Array[i].name}</div>
                                            <div class="col-lg-4 work_time work2_time1">${cpu4Array[i].remainingTime}</div>
                                            <div class="col-lg-2 work_prio work2_prio1">${cpu4Array[i].priority}</div>
                                        </div>
                                        <hr class="c-orange">`;
        } 
        

        // Cpu 1

        if(CPU.array.length > 0){
            status1.innerHTML = '';
            status1.innerHTML = 'Busy';
            status11.innerHTML = 'Busy';
            status1.style.color = '#FC4C01';
            status11.style.color = '#FC4C01';

            cpu_img1.src = 'media/cpu.png';
        }
        else{
            status1.innerHTML = '';
            status1.innerHTML = 'Available';
            status11.innerHTML = 'Available';
            status1.style.color = '#8ACF8C';
            status11.style.color = '#8ACF8C';

            cpu_img1.src = 'media/cpuGreen.png';
        }

        // Cpu 2

        if(cpu2.length > 0){
            status2.innerHTML = '';
            status2.innerHTML = 'Busy';
            status22.innerHTML = 'Busy';
            status2.style.color = '#FC4C01';
            status22.style.color = '#FC4C01';

            cpu_img2.src = 'media/cpu.png';
        }
        else{
            status2.innerHTML = '';
            status2.innerHTML = 'Available';
            status22.innerHTML = 'Available';
            status2.style.color = '#8ACF8C';
            status22.style.color = '#8ACF8C';

            cpu_img2.src = 'media/cpuGreen.png';
        }

        // Cpu 3

        if(cpu3.length > 0){
            status3.innerHTML = '';
            status3.innerHTML = 'Busy';
            status33.innerHTML = 'Busy';
            status3.style.color = '#FC4C01';
            status33.style.color = '#FC4C01';

            cpu_img3.src = 'media/cpu.png';
        }
        else{
            status3.innerHTML = '';
            status3.innerHTML = 'Available';
            status33.innerHTML = 'Available';
            status3.style.color = '#8ACF8C';
            status33.style.color = '#8ACF8C';

            cpu_img3.src = 'media/cpuGreen.png';
        }

        // Cpu 4

        if(cpu4.length > 0){
            status4.innerHTML = '';
            status4.innerHTML = 'Busy';
            status44.innerHTML = 'Busy';
            status4.style.color = '#FC4C01';
            status44.style.color = '#FC4C01';

            cpu_img4.src = 'media/cpu.png';
        }
        else{
            status4.innerHTML = '';
            status4.innerHTML = 'Available';
            status44.innerHTML = 'Available';
            status4.style.color = '#8ACF8C';
            status44.style.color = '#8ACF8C';

            cpu_img4.src = 'media/cpuGreen.png';
        }

    }

    // let work_row = document.querySelector('.work-row');
    // let work_row2 = document.querySelector('.work-row2');
    // let work_row3 = document.querySelector('.work-row3');

    // window.addEventListener('click', function(element){
    //     // alert(element);
    //     console.log(element.target.className);
    // });



    // Upload file

    document.getElementById('input-file').addEventListener('change', getFile)

    function getFile(event) {
        const input = event.target
        if ('files' in input && input.files.length > 0) {
            placeFileContent(document.getElementById('commandInput'),input.files[0])
        }
    }
    
    function placeFileContent(target, file) {
        readFileContent(file).then(content => {
          target.value = content
      }).catch(error => console.log(error))
    }
    
    function readFileContent(file) {
        const reader = new FileReader()
      return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
      })
    }