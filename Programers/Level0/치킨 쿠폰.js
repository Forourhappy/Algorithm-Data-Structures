function solution(chicken) {
	return parseInt(serviceChicken(chicken));
}

function serviceChicken(chicken) {
	if (chicken < 0.1) return 0;
	let service = chicken / 10;
	return service + serviceChicken(service);
}
