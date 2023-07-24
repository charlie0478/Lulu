<script>
    import { onMount } from 'svelte';
    import { spring } from 'svelte/motion';
    
    let track;
    
    // create a spring, with some default values
    let coords = spring(0, {
        stiffness: 0.09,
        damping: 0.8
    });
    
    let startX;
    let currentX = 0;
    
    let handleOnDown = (e) => {

        startX = e.clientX - currentX;
        document.addEventListener('mousemove', handleOnMove);
        document.addEventListener('mouseup', handleOnUp);
        document.addEventListener('mouseleave', handleOnUp);
    }
    
    let handleOnUp = () => {

        document.removeEventListener('mousemove', handleOnMove);
        document.removeEventListener('mouseup', handleOnUp);
        document.removeEventListener('mouseleave', handleOnUp);
    }
    
    let handleOnMove = (e) => {
        e.preventDefault();
        currentX = e.clientX - startX;
        coords.set(currentX);
    }
    
    onMount(() => {
        document.addEventListener('mousedown', handleOnDown);
    });
    </script>
    

<div id="image-track"
    bind:this={track}
    style=" transform: translateX({$coords}px)">
    
      <img alt="placeholder" class="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      <img class="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
      <!-- Your other images here -->
      <img class="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      <img class="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      <img class="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      <img class="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
      <img class="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
      <img class="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
    </div>

    <style>
        #image-track {
      display: flex;
      gap: 4vmin;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-bottom: 4rem;
      transform: translate(0%, -75%); 
      user-select: none; /* -- Prevent image highlighting -- */
    }
    
    img {
        margin-bottom: 50px;
    }
    #image-track > .image {
      width: 40vmin;
      height: 56vmin;
      object-fit: cover;
      object-position: 100% center;
    }
    
    
    
    
    
    /* -- YouTube Link Styles -- */
    
    </style>