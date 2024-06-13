$(document).ready(function() {
    $('.like-btn').click(function() {
        var $likeBtn = $(this);
        var $likeCount = $likeBtn.siblings('.like-count');
        var currentLikes = parseInt($likeCount.text());
        
        if ($likeBtn.hasClass('liked')) {
            // Dislike
            $likeCount.text(currentLikes - 1 + ' likes');
            $likeBtn.removeClass('liked');
            $likeBtn.text('❤ Like');
        } else {
            // Like
            $likeCount.text(currentLikes + 1 + ' likes');
            $likeBtn.addClass('liked');
            $likeBtn.text('❤ Unlike');
        }
    });
});