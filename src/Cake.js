import './cake.css'
function Cake(props){
    const click=props.click
    return(
    <div>  
        <div class="cake-body">
    <div class="layer f1">
        <div class="spot-group sg1">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
            <div class="spot s3"></div>
        </div>
        <div class="spot-group sg2">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
        </div>
    </div>
    <div class="layer f2">
        <div class="spot-group sg3">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
        </div>
        <div class="spot-group sg4">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
            <div class="spot s3"></div>
        </div>
    </div>
    <div class="layer f3">
        <div class="spot-group sg5">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
            <div class="spot s3"></div>
        </div>
    </div>
    <div class="layer f4">
    
      <div class="drip-ctn">
        <div class="drip d1"></div>
        <div class="drip d2"></div>
        <div class="drip d3"></div>
        <div class="drip d4"></div>
        <div class="drip d5"></div>
        <div class="drip d6"></div>
        <div class="drip d7"></div>
        <div class="drip d8"></div>
        <div class="drip d9"></div>
      <div>
    </div>
    <div class="candle-ctn">
        <div class="candle c1">
          <div class="c-base"></div>
          <div class="wick"></div>
        {!click && <div class="flame"></div>}  
          <div class="highlight"></div>
        </div>
    </div>
</div>

  </div>

 
</div>

</div> 
    )
}
export default Cake;
