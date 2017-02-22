$('#csr_name').change(function() {
	var myValue = $(this).val();
	switch (myValue) {
	
	case 'Joey Knight':
		$('input[name="csr_email"]').val('jknight@paifashion.com');
		$('input[name="csr_phone"]').val('x255');
		$('input[name="csr_code"]').val('JR');
		break;	
				
	case 'Wren White':
		$('input[name="csr_email"]').val('wwhite@paifashion.com');
		$('input[name="csr_phone"]').val('x237');
		$('input[name="csr_code"]').val('WW');
		break;	
		
	case 'Cari White':
		$('input[name="csr_email"]').val('cwhite@paifashion.com');
		$('input[name="csr_phone"]').val('x186');
		$('input[name="csr_code"]').val('C2');
		break;	
				
		
	case 'Tiphani Isom':
		$('input[name="csr_email"]').val('tisom@paifashion.com');
		$('input[name="csr_phone"]').val('x145');
		$('input[name="csr_code"]').val('TI');
		break;	
				
	case 'Dena Isgrigg':
		$('input[name="csr_email"]').val('disgrigg@paifashion.com');
		$('input[name="csr_phone"]').val('x181');
		$('input[name="csr_code"]').val('DI');
		break;	
			
	case 'Julie Montgomery':
		$('input[name="csr_email"]').val('jmontgomery@paifashion.com');
		$('input[name="csr_phone"]').val('x228');
		$('input[name="csr_code"]').val('JM');
		break;	
		
	case 'Sara Hawkins':
		$('input[name="csr_email"]').val('shawkins@paifashion.com');
		$('input[name="csr_phone"]').val('x260');
		$('input[name="csr_code"]').val('SH');
		break;
		
	case 'Angel Talbert':
		$('input[name="csr_email"]').val('atalbert@paifashion.com');
		$('input[name="csr_phone"]').val('x105');
		$('input[name="csr_code"]').val('AT');		
		break;
		
	case 'Lori Beste':
		$('input[name="csr_email"]').val('lbeste@paifashion.com');
		$('input[name="csr_phone"]').val('x474');
		$('input[name="csr_code"]').val('L5');
		break;
		
	case 'Amber Kitchen':
		$('input[name="csr_email"]').val('akitchen@paifashion.com');
		$('input[name="csr_phone"]').val('x167');
		$('input[name="csr_code"]').val('A1');
		break;
		
	case 'Rachel Bolinger':
		$('input[name="csr_email"]').val('rbolinger@paifashion.com');
		$('input[name="csr_phone"]').val('x259');
		$('input[name="csr_code"]').val('RB');
		break;
		
	case 'Terry Licklider':
		$('input[name="csr_email"]').val('tlicklider@paifashion.com');
		$('input[name="csr_phone"]').val('x140');
		$('input[name="csr_code"]').val('TL');
		break;
		
	case 'Tracy Montgomery':
		$('input[name="csr_email"]').val('tmontgomery@paifashion.com');
		$('input[name="csr_phone"]').val('x125');
		$('input[name="csr_code"]').val('TE');
		break;
	
	case 'Grant Clark':
		$('input[name="csr_email"]').val('gclark@imperialsports.com');
		$('input[name="csr_phone"]').val('x212');
		$('input[name="csr_code"]').val('GC');
		break;
	
	case 'Unassigned':
		$('input[name="csr_email"]').val('jvanmeter@paifashion.com');
		$('input[name="csr_phone"]').val('x459');
		$('input[name="csr_code"]').val('');
		break;										
	}
});