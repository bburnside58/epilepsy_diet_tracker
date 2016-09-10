import { Component } from "@angular/core";
//import { Chart } from "./homeCharts.model";
// import { ZingCharts } from "./zingcharts.component";


// Lets use an external html file for this me thinks.
@Component({
    selector: 'my-home',
    template: `
    
<div>

    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header2">Epilepsy Diet Tracker
                    <small>dietary therapy for epilepsy</small>
                </h1>
            </div>
        </div>
        <!-- /.row -->
        <br>
        <br>
        <!-- Project One -->
        <div class="row">
            <div class="col-md-7">
                
                    <img class="img-responsive" src="{{ image1 }}" alt="Typical American Diet Pie Chart">
                    <img class="img-responsive" src="{{ legendMCT }}" alt="Pie Chart Legend">
                
            </div>

            <div class="col-md-5">
                <h3>Typical American Diet</h3>
                <h4>-No seizure impact</h4>
                <p>Why start keto? 
                The ketogenic diet results in adaptive changes to brain energy 
                metabolism that increase the energy reserves; ketone bodies are a 
                more efficient fuel than glucose, and the number of mitochondria is 
                increased. This may help the neurons to remain stable in the face of 
                increased energy demand during a seizure, and may confer a 
                neuroprotective effect.</p>
            </div>
        </div>
        <!-- /.row -->

        <hr>

        <!-- Project Two -->
        <div class="row">
            <div class="col-md-7">
                
                    <img class="img-responsive" src="{{ imageAtkins }}" alt="Typical Atkins Pie Chart">
                    <img class="img-responsive" src="{{ legendMCT }}" alt="Pie Chart Legend">
                
            </div>
            <div class="col-md-5">
                <h3>Atkins Induction Phase</h3>
                <h4>-a.k.a. modified Atkins diet</h4>
                <h4>-Some seizure control</h4>
                <p>Compared with the ketogenic diet, the modified Atkins 
                diet (MAD) places no limit on calories or protein, and the lower 
                overall ketogenic ratio (approximately 1:1) does not need to be 
                consistently maintained by all meals of the day. The MAD does not 
                begin with a fast or with a stay in hospital and requires less 
                dietitian support than the ketogenic diet. </p>
            </div>
        </div>
        <!-- /.row -->

        <hr>

        <!-- Project Three -->
        <div class="row">
            <div class="col-md-7">
                
                    <img class="img-responsive" src="{{ imageClassic }}" alt="Classic Keto Pie Chart">
                    <img class="img-responsive" src="{{ legendMCT }}" alt="Pie Chart Legend">
               
            </div>
            <div class="col-md-5">
                <h3>Classic Ketogenic</h3>
                <h4>-Powerful seizure control</h4>
                <p>The ketogenic ratio of the diet compares the weight of fat to the 
                combined weight of carbohydrate and protein. This is typically 4:1. The classic ketogenic diet is not a 
                balanced diet and only contains tiny portions of fresh fruit and vegetables, 
                fortified cereals and calcium-rich foods. In particular, the B vitamins, calcium 
                and vitamin D must be artificially supplemented.</p>
            </div>
        </div>
        <!-- /.row -->

        <hr>

        <!-- Project Four -->
        <div class="row">

            <div class="col-md-7">
                
                    <img class="img-responsive" src="{{ imageMCT }}" alt="MCT Oil Pie Chart">
                    <img class="img-responsive" src="{{ legendMCT }}" alt="Pie Chart Legend">
                
            </div>
            <div class="col-md-5">
                <h3>MCT Oil Ketogenic</h3>
                <h4>-Powerful seizure control</h4>
                <h4>-Improved diet flexability</h4>
                <p>Normal dietary fat contains mostly long-chain triglycerides (LCT). 
                Medium-chain triglycerides are more ketogenic than LCTs because they 
                generate more ketones per unit of energy when metabolised. Their use 
                allows for a diet with a lower proportion of fat and a greater proportion 
                of protein and carbohydrate, leading to more food choices and larger 
                portion sizes.</p>
            </div>
        </div>
        <!-- /.row -->

        <hr>

        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Brian C. Burnside</p>
                    <p></p>
                </div>
            </div>
            <!-- /.row -->
        </footer>

    </div>
    <!-- /.container -->



</div>

`
})
export class HomeComponent {

    legend = "img/legendNoMct.png";
    legendMCT = "img/legend.png";
    image1 = "img/typical.png";
    imageAtkins = "img/atkins.png";
    imageClassic = "img/classicKeto.png";
    imageMCT = "img/MCT.png";
  
}