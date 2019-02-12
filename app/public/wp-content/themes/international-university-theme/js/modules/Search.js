import $ from 'jquery';


class Search {

  //1- Describe and create/initiate the object
  constructor(){
    this.resultsDiv = $('#search-overlay__results');
    this.openButton = $('.js-search-trigger');
    this.closeButton = $('.search-overlay__close');
    this.searchOverlay = $('.search-overlay');
    this.searchField = $('#search-term');
    this.events();
    this.isOverlayOpen = false;
    this.isSpinnerVisible = false;
    this.previousValue;
    this.typingTimer;
  }

  //2- Events
  events(){
    this.openButton.on('click', this.openOverlay.bind(this));
    this.closeButton.on('click', this.closeOverlay.bind(this));
    $(document).on('keyup', this.keyPressDispatcher.bind(this));
    this.searchField.on('keyup', this.typingLogic.bind(this));
  }


  //3- Methods

  typingLogic(){

    if(this.searchField.val() != this.previousValue){
      clearTimeout(this.typingTimer); //reset timeout
      if(this.searchField.val()){
        if(!this.isSpinnerVisible){ //avoid spinner reload all the time..
          this.resultsDiv.html('<div class="spinner-loader"></div>'); // loader spinner..
          this.isSpinnerVisible = true;
        }
      this.typingTimer = setTimeout(this.getReaults.bind(this), 2000);
      }else{
        this.resultsDiv.html('');
        this.isSpinnerVisible = false;
      }        
    }
    this.previousValue = this.searchField.val();
  }

  getReaults(){
    this.resultsDiv.html("Imagine some results here..");
    this.isSpinnerVisible = false;
  }


  keyPressDispatcher(event){
    //press S to open
    if(event.keyCode == 83 && !this.isOverlayOpen && !$('input, textarea').is(':focus')){
      this.openOverlay();
    }
    //press esc to close
    if(event.keyCode == 27 && this.isOverlayOpen){
      this.closeOverlay();
    }    
  }

  openOverlay(){
    this.searchOverlay.addClass('search-overlay--active');
    $('body').addClass("body-no-scroll");
    console.log('OPEN');    
    this.isOverlayOpen = true;
  }

  closeOverlay(){
    this.searchOverlay.removeClass('search-overlay--active'); 
    $('body').removeClass("body-no-scroll");
    console.log('CLOSE');    
    this.isOverlayOpen = false;
  }

}

export default Search;