<?php 
    $adres_odbiorcy="lisssu14@gmail.com";
    $adres_kopii="lisssu14@gmail.com";
	$adres_nadawcy=$_POST['email'];
	$naglowek_listu="From: $adres_nadawcy\r\nCc: $adres_kopii";
	$temat_listu="Zapytanie ze strony";
	$tresc_listu=$_POST['first-name'] ." ". $_POST['last-name']  . " napisal: " . $_POST['text'];
	$mail_status= mail($adres_odbiorcy, $temat_listu, $tresc_listu, $naglowek_listu);

	if ($mail_status) { ?>
		<script language="javascript" type="text/javascript">
		 alert('Dziękujemy za wiadomość. Wkrótce się z Tobą skontaktujemy');
		 window.location.href = 'index.html';
		</script>
		<?php
		}else { ?>
		 <script language="javascript" type="text/javascript">
		  alert('Nastąpił błąd przy wysłaniu maila');
		  window.location.href = 'index.html';
		 </script>
		<?php } ?>

?>
