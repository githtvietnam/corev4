var HT = {};


// Check if element exists
$.fn.elExists = function() {
return this.length > 0;
};


HT.toggleEditSeo = () => {
   if($('.edit-seo').length){
      $(document).on('click','.edit-seo', function(){
         $('.seo-group').toggleClass('hidden')
         return false;
      });
   }
}

HT.processCanonical = () => {
   let $canonical = $('.canonical')
   let $metaTitle = $('.meta-title')
   if($('#title').length){
      $(document).on('keyup', '#title', function(){
         let _this = $(this)
         let string = HT.slug(_this.val())
         let flag_canonical = $canonical.attr('data-flag')
         let flag_meta_title = $metaTitle.attr('data-flag')
         if(flag_canonical == 0){
            HT.changeCanonical(string)
            HT.changeMetaLink(BASE_URL + string + SUFFIX)
         }
         console.log(flag_meta_title)
         if(flag_meta_title == 0){
            HT.changeMetaTitle(_this.val())
            HT.changeSeoMetaTitle(_this.val())
         }
      });
   }

   if($('.canonical').length){
      $(document).on('keyup', '.canonical', function(){
         let _this = $(this)
         _this.attr('data-flag', 1)
         let string = HT.slug(_this.val())
         HT.changeMetaLink(BASE_URL + string + SUFFIX)
      });
   }
}

HT.processMetaTitle = () => {
   if($('.meta-title').length){
      $(document).on('keyup', '.meta-title', function(){
         let _this = $(this)
         let string = _this.val()
         _this.attr('data-flag', 1)
         HT.changeMetaTitle(string)
         HT.checkCharacter(_this, 'titleCount')
      });
   }
}

HT.processMetaDescription = () => {
   if($('.meta-description').length){
      $(document).on('keyup', '.meta-description', function(){
         let _this = $(this)
         let string = _this.val()
         _this.attr('data-flag', 1)
         HT.checkCharacter(_this, 'descriptionCount')
      });
   }
}

HT.changeMetaTitle = (string) => {
   if($('.g-title').length){
      $('.g-title').html(string);
   }
}

HT.changeMetaLink = (string) => {
   if($('.g-link').length){
      $('.g-link').html(string);
   }
}

HT.changeMetaCanonical = (text) => {
   if($('.g-description').length){
      $('.g-description').html(text);
   }
}
HT.changeCanonical = (string) => {
   if($('.canonical').length){
      $('.canonical').val(string);
   }
}
HT.changeSeoMetaTitle = (string) => {
   if($('.meta-title').length){
      $('.meta-title').val(string);
   }
}


HT.checkCharacter = (object, target) => {
   let totalCharacter = object.val().length
   let maxCharacter = (target == 'titleCount') ? 71 : 320
   if(totalCharacter > maxCharacter){
      object.addClass('s-alert')
   }else{
      object.removeClass('s-alert');
   }
   $('#'+target).html(totalCharacter);
}

HT.slug = (title) => {
   title = HT.removeUtf8(title);
	return title;
}

HT.removeUtf8 = (str) => {
   str = str.toLowerCase(); // chuyen ve ki tu biet thuong
	str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
	str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
	str = str.replace(/??|??|???|???|??/g, "i");
	str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
	str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
	str = str.replace(/???|??|???|???|???/g, "y");
	str = str.replace(/??/g, "d");
	str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|,|\.|\:|\;|\'|\???| |\"|\&|\#|\[|\]|\\|\/|~|$|_/g, "-");
	str = str.replace(/-+-/g, "-");
	str = str.replace(/^\-+|\-+$/g, "");
	return str;
}


$(document).ready(function(){
   HT.toggleEditSeo();
   HT.processCanonical();
   HT.processMetaTitle();
   HT.processMetaDescription();
});
