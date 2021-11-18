<?php 
    $adres_odbiorcy="jklockowski@wp.pl";
    $adres_kopii="jklockowski@gmail.com";
	$adres_nadawcy=$_POST['email'];
	$naglowek_listu="From: $adres_nadawcy\r\nCc: $adres_kopii";
	$temat_listu="Zapytanie ze strony";
	$tresc_listu=$_POST['first_name'] . $_POST['last_name'] . "telefon: " . $_POST['phone'] . " chce się skontaktować:";
	if(mail($adres_odbiorcy, $temat_listu, $tresc_listu, $naglowek_listu))
		{
		echo("Wysyłka listu o temacie: '$temat_listu' została zakończona pomyślnie!");
		}
		else
		{
		echo("Błąd podczas wysyłania listu: '$temat_listu'.");
		}
?>
