if (isset($_POST['name'])) {
    $url = "https://api.twitter.com/1/users/lookup.json?screen_name=" . $_POST['name'];
    $content = @file_get_contents($url);

    if (($json_data = json_decode($content, 1)) == NULL) {
        echo 0;
    } else {
        //print_r($json_data);
        if (!empty($json_data[0]['screen_name'])) {
            // user exists
            echo 1;
        }
    }
    exit;
}